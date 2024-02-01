import { one_time_payment } from "@/lib/NexusProgram/payment/recuring_payment";
import { getProjectUsers } from "@/lib/NexusProgram/project/utils/get_project_users";
import { Button } from "@mui/material";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function info() {
  const router = useRouter();
  const anchorWallet = useAnchorWallet();
  const { connection } = useConnection();
  const [users, setUsers] = useState<any[]>([]);

  const get_project = async (project: any) => {
    try {
      console.log("_projects");
      const _projects = await getProjectUsers(connection, project, "confirmed");
      const arr: any[] = [];

      _projects.map((prj) => {
        const objct = {
          role: prj.role,
          objct: [prj],
        };
        if (arr.length == 0) {
          arr.push(objct);
        } else {
          let not_exist = true;
          arr.map((ar, i) => {
            if (ar.role == prj.role) {
              arr[i].objct.push(prj);
              not_exist = false;
            }
          });
          if (not_exist) {
            arr.push(objct);
          }
        }
      });
      console.log(arr);
      setUsers(arr);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!anchorWallet) return;
    if (!router.isReady) return;
    console.log("_projects");

    const { project } = router.query;
    console.log(project);

    get_project(project);
  }, [anchorWallet, router.isReady]);

  return (
    <div className="w-full md:w-[80vw] float-right py-[5vw]">
      <Head>
        <title>Payemnt</title>
      </Head>
      <div className="w-[90vw] md:w-[70vw] mx-auto">
        {users &&
          users.map((user) => (
            <>
              {/* <div className="text-[4vw] font-semibold md:text-[2vw] underline text-black">
              {user.role}
            </div> */}
              <div className="flex flex-col gapy-y-[3vw] md:gap-y-[1.4vw]">
                {user.objct.map((el: any, i: number) => (
                  <div key={i}>
                    <div className="w-full mt-[2vw] bg-black rounded-[0.6vw] py-[2vw] px-[2.8vw] flex items-center justify-between">
                      <div className="flex items-center gap-x-[3vw] md:gap-x-[2vw]">
                        <div className=" w-[15vw] md:w-[8vw] h-[15vw] md:h-[8vw] bg-white/50 rounded-full"></div>
                        <div>
                          <div className="text-[5vw] md:text-[2.5vw] font-semibold">
                            {el.projectName}
                          </div>
                          <div className="text-[3vw] md:text-[1.5vw]">
                            {el.projectRole}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row gap-y-[2vw] gap-x-[1vw] items-center">
                        <Button
                          className="!px-[2vw] md:!px-[3.4vw] !py-[0.6vw] !w-[28vw] md:!w-auto !bg-white !text-black !text-[2vw] md:!text-[1vw] !normal-case"
                          variant="contained"
                        >
                          Onetime Payment
                        </Button>
                        <Button
                          onClick={() =>
                            router.push(
                              "/payment/pay/recurringpayment/" +
                                el.pubkey.toBase58()
                            )
                          }
                          className="!px-[2vw] md:!px-[3.4vw] !py-[0.6vw] !w-[28vw] md:!w-auto !bg-white !text-black !text-[2vw] md:!text-[1vw] !normal-case"
                          variant="contained"
                        >
                          Reccuring Payment
                        </Button>
                      </div>
                    </div>
                    <div className="w-[90%] text-black border-black border-[0.2vw] border-t-0 px-[3vw] py-[2vw] mx-auto flex justify-between items-center">
                      <div>
                        <div className="text-[2.5vw] md:text-[1.5vw]">
                          Ongoing Stream
                        </div>
                        <div className="text-[3.5vw] md:text-[2.5vw] font-semibold">
                          {el.address.toBase58().slice(0, 8) + "..."}
                        </div>
                      </div>
                      <div className="flex items-center gap-x-[2vw] md:gap-x-[1.4vw]">
                        <div className="text-[3.5vw] md:text-[2.5vw] font-semibold">
                          $100 / Month
                        </div>
                        <div className="flex flex-col gap-y-[2vw] md:gap-y-[0.8vw]">
                          <Button
                            variant="contained"
                            className="!text-[1.8vw] md:!text-[0.8vw] !text-black !w-[18vw] md:!w-[9.4vw] !py-[0.6vw] !bg-[#00ff47]"
                          >
                            Edit pay rate
                          </Button>
                          <Button
                            variant="contained"
                            className="!text-[1.8vw] md:!text-[0.8vw] !font-semibold !text-white !w-[18vw] md:!w-[9.4vw] !py-[0.6vw] !bg-[#FF2D2D]"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ))}
      </div>
    </div>
  );
}
