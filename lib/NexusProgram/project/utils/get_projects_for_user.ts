import { IDL } from "@/data/IDL";
import { USER_PREFIX } from "@/lib/constants/constants";
import { BorshAccountsCoder } from "@coral-xyz/anchor";
import { AnchorWallet } from "@solana/wallet-adapter-react";

import type { Commitment, Connection } from "@solana/web3.js";
import { PublicKey } from "@solana/web3.js";

export const getProjectForUser = async (
    connection: Connection,
    anchorWallet: AnchorWallet,
    commitment?: Commitment,
) => {

    const NEXUS_ADDRESS = new PublicKey("33cQK4yLQkRVBKtRWoSA2aYjTPDgEp3CM6EK8w6M2ALf");
    const [founder] = PublicKey.findProgramAddressSync(
        [
            anchorWallet.publicKey.toBuffer(),
            Buffer.from(USER_PREFIX),
        ],
        NEXUS_ADDRESS
    )


    const PROJECT_OFFSET = 8;
    const programAccounts = await connection.getProgramAccounts(
        NEXUS_ADDRESS,
        {
            filters: [{ memcmp: { offset: PROJECT_OFFSET, bytes: founder.toBase58() } }],
            commitment,
        }
    );

    console.log(programAccounts[0].account.data.length)

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
    console.log(ProjectDatas);
    return ProjectDatas
    // .sort((a, b) =>
    //     a.pubkey.toBase58().localeCompare(b.pubkey.toBase58())
    // );
};



