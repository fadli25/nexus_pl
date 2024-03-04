import { IDL } from "@/data/IDL";
import { USER_PREFIX } from "@/lib/constants/constants";
import { BorshAccountsCoder, web3 } from "@coral-xyz/anchor";
import { AnchorWallet } from "@solana/wallet-adapter-react";

import type { Commitment, Connection } from "@solana/web3.js";
import { PublicKey } from "@solana/web3.js";

export const getApplyForUser = async (
    connection: Connection,
    user: web3.PublicKey,
    commitment?: Commitment,
) => {
    const NEXUS_ADDRESS = new PublicKey("33cQK4yLQkRVBKtRWoSA2aYjTPDgEp3CM6EK8w6M2ALf");

    const [founder] = PublicKey.findProgramAddressSync(
        [
            user.toBuffer(),
            Buffer.from(USER_PREFIX),
        ],
        NEXUS_ADDRESS
    )

    const PROJECT_OFFSET = 89;
    const programAccounts = await connection.getProgramAccounts(
        NEXUS_ADDRESS,
        {
            filters: [{ memcmp: { offset: PROJECT_OFFSET, bytes: founder.toBase58() } }],
            commitment,
        }
    );

    console.log(programAccounts.length)
    const ProjectDatas: any[] = [];
    const coder = new BorshAccountsCoder(IDL);
    programAccounts.forEach((account) => {
        try {
            const ProjectData: any = coder.decode(
                "Apply",
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



