import { IDL } from "@/data/IDL";
import { USER_PREFIX } from "@/lib/constants/constants";
import { BorshAccountsCoder } from "@coral-xyz/anchor";
import { AnchorWallet } from "@solana/wallet-adapter-react";

import type { Commitment, Connection } from "@solana/web3.js";
import { PublicKey } from "@solana/web3.js";

export const getAllRoles = async (
    connection: Connection,
    commitment?: Commitment,
) => {
    const NEXUS_ADDRESS = new PublicKey("4qe9UNHeTtpyqsBV9Ahp9XraS1H5QkfimQHaXtLrpyRL");

    const PROJECT_OFFSET = 200;
    const programAccounts = await connection.getProgramAccounts(
        NEXUS_ADDRESS,
        {
            filters: [{ dataSize: PROJECT_OFFSET }],
            commitment,
        }
    );

    console.log(programAccounts.length)
    const ProjectDatas: any[] = [];
    const coder = new BorshAccountsCoder(IDL);
    programAccounts.forEach((account) => {
        try {
            const ProjectData: any = coder.decode(
                "Role",
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
    return ProjectDatas
    // .sort((a, b) =>
    //     a.pubkey.toBase58().localeCompare(b.pubkey.toBase58())
    // );
};



