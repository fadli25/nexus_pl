import { accept_invite } from "@/lib/NexusProgram/invite/accept";
import { refuse_invite } from "@/lib/NexusProgram/invite/refuse";
import { getInvitationFroUser } from "@/lib/NexusProgram/invite/utils.ts/getInvtforUser";
import { notify_delete, notify_error, notify_laoding, notify_success } from "@/pages/profile";
import { Button } from "@mui/material";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
export default function index() {
  const [invitations, setInvitation] = useState<any[]>();
  const { connection } = useConnection();
  const anchorWallet = useAnchorWallet();

  const router = useRouter();

  useEffect(() => {
    if (!anchorWallet) return;
    get_invitation();
  }, [anchorWallet]);

  const get_invitation = async () => {
    try {
      const invtations = await getInvitationFroUser(
        connection,
        anchorWallet!,
        "confirmed"
      );
      console.log(invtations);
      setInvitation(invtations);
    } catch (e) {
      console.log(e);
    }
  };

  const refuse = async (i: number) => {
    try {
      notify_laoding("Transaction Pending...");
      const invite = invitations![i];
      console.log(invite);
      await refuse_invite(
        anchorWallet,
        connection,
        invite.pubkey,
        invite.project
      );
      notify_delete();
      notify_success("Transaction Successful!");
    } catch (e) {
      notify_delete();
      notify_error("Transaction Failed");
      console.log(e);
    }
  };

  const accept = async (i: number) => {
    try {
      notify_laoding("Transaction Pending...");
      const invite = invitations![i];
      console.log(invite);
      await accept_invite(
        anchorWallet,
        connection,
        invite.pubkey,
        invite.project
      );
      notify_delete();
      notify_success("Transaction Successful!");
    } catch (e) {
      notify_delete();
      notify_error("Transaction Failed");
      console.log(e);
    }
  };

  return (
    <div className="pt-[2vw] w-full md:w-[84vw] float-right">
      <Head>
        <title>Job</title>
      </Head>
      <div className="w-[90vw] md:w-[60vw] mx-auto">
        {invitations &&
          invitations.map(
            (invite, i) =>
              invite.status === 0 && (
                <div
                  key={i}
                  className="w-full my-[3vw] relative rounded-[1.5vw] md:rounded-[1vw] bg-black px-[3vw] flex justify-between text-white items-center h-[20vw] md:h-[12vw]"
                >
                  <div>
                    <div className="absolute top-[9%] text-[3vw] md:text-[1.5vw] fontPopSemibold left-[5%] text-[#00ff47]">
                      You have been hired !!!!
                    </div>
                    <div
                      className="text-[5.3vw] md:text-[3vw]  cursor-pointer"
                      onClick={() => router.push("/freelance/ongoing/project")}
                    >
                      {invite.name}
                    </div>
                  </div>

                  <div className="flex items-center gap-x-[1vw]">
                    <Button
                      sx={{
                        fontSize: "0.9vw",
                        textTransform: "none",
                        padding: "0.4vw 2vw",
                        color: "#fff",
                        bgcolor: "#FF2D2D",
                        borderRadius: "0.1vw",
                        ":hover": {
                          bgcolor: "#FF2D2D",
                        },
                        "@media (max-width:767px)": {
                          fontSize: "2.4vw",
                        },
                      }}
                      variant="contained"
                      onClick={(e) => {
                        e.preventDefault();
                        refuse(i);
                      }}
                      className="bg-[#FF2D2D] hover:bg-[#FF2D2D]"
                    >
                      Reject
                    </Button>
                    <Button
                      sx={{
                        fontSize: "0.9vw",
                        textTransform: "none",
                        padding: "0.4vw 2vw",
                        color: "#000",
                        bgcolor: "#00ff47",
                        borderRadius: "0.1vw",
                        ":hover": {
                          bgcolor: "#00ff47",
                        },
                        "@media (max-width:767px)": {
                          fontSize: "2.4vw",
                        },
                      }}
                      variant="contained"
                      onClick={(e) => {
                        e.preventDefault();
                        accept(i);
                      }}
                      className="bg-[#00ff47] hover:bg-[#00ff47]"
                    >
                      Approve
                    </Button>
                  </div>
                </div>
              )
          )}
      </div>
    </div>
  );
}
