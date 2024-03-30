import { getProjectForUser } from "@/lib/NexusProgram/project/utils/get_projects_for_user";
import { Button } from "@mui/material";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";

export default function index() {
  const { connection } = useConnection();
  const anchorWallet = useAnchorWallet();

  const [project, setProject] = useState<any[]>();

  const get_project = async () => {
    try {
      const _project = await getProjectForUser(
        connection,
        anchorWallet!,
        "confirmed"
      );

      console.log(_project);
      setProject(_project);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!anchorWallet) return;
    get_project();
  }, [anchorWallet]);

  const router = useRouter();
  return (
    <div className="pt-[2vw] w-full md:w-[84vw] float-right">
      <Head>
        <title>Ongoing</title>
      </Head>
      <div className="w-[85vw] md:w-[60vw] mx-auto">
        {project &&
          project.map((el, i) => (
            <div
              key={i}
              className="w-full my-[3vw] relative rounded-[1vw] bg-black px-[3vw] flex justify-between text-white items-center h-[18vw] md:h-[12vw]"
            >
              <div>
                <div className="absolute top-[9%] text-[2.5vw] md:text-[1.5vw] fontPopSemibold left-[5%] text-[#00ff47]">
                  {el.role}
                </div>
                <div
                  className="text-[5vw] md:text-[3vw] fontPopSemibold cursor-pointer"
                  onClick={() => router.push("/freelance/project/" + el.project.toBase58())}
                >
                  {el.projectName}
                </div>
              </div>
              <div>
                {/* <MuiButton>Close</MuiButton> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

interface Icon {
  children: ReactNode;
  onClick?: () => void;
}

export function MuiButton({ children, onClick }: Icon) {
  return (
    <Button
      sx={{
        fontSize: "1vw",
        textTransform: "none",
        padding: "0.7vw 2.5vw",
        color: "#fff",
        bgcolor: "#FF2D2D",
        borderRadius: "0.1vw",
        ":hover": {
          bgcolor: "#FF2D2D",
        },
        "@media (max-width:767px)": {
          fontSize: "2.5vw",
          padding: "0.7vw 4.5vw",
        },
      }}
      variant="contained"
      onClick={onClick}
      className="bg-[#FF2D2D] hover:bg-[#FF2D2D]"
    >
      {children}
    </Button>
  );
}
