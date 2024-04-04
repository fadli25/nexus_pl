import { IDL } from "@/data/IDL";
import { USER_PREFIX } from "@/lib/constants/constants";
import { BorshAccountsCoder } from "@coral-xyz/anchor";
import { AnchorWallet } from "@solana/wallet-adapter-react";

import type { Commitment, Connection } from "@solana/web3.js";
import { PublicKey } from "@solana/web3.js";

export const getProjectUsers = async (
    connection: Connection,
    project: string,
    commitment?: Commitment,
) => {

    const NEXUS_ADDRESS = new PublicKey("xce1Li2q1NYDBKvPbSEj6qA9fsoqEdYN4RHDaF9hBdn");

    const PROJECT_OFFSET = 41;
    const programAccounts = await connection.getProgramAccounts(
        NEXUS_ADDRESS,
        {
            filters: [{ memcmp: { offset: PROJECT_OFFSET, bytes: project } }],
            commitment,
        }
    );


    console.log(programAccounts.length)
    const ProjectDatas: any[] = [];
    const coder = new BorshAccountsCoder(IDL);
    programAccounts.forEach((account) => {
        try {
            const ProjectData: any = coder.decode(
                "APA",
                account.account.data
            );

            ProjectData.pubkey = account.pubkey;
            if (ProjectData) {
                ProjectDatas.push(
                    // ...account,
                    // parsed:
                    ProjectData
                );
            }
        } catch (e) {
            console.log(`Failed to decode token manager data`);
        }
    });

    const arr: any[] = [];

    ProjectDatas.map((p) => {
        arr.push(p.user)
    })


    return ProjectDatas
    // .sort((a, b) =>
    //     a.pubkey.toBase58().localeCompare(b.pubkey.toBase58())
    // );
};



