import { IDL } from "@/data/IDL";
import { BorshAccountsCoder } from "@coral-xyz/anchor";

import type { Commitment, Connection } from "@solana/web3.js";
import { PublicKey } from "@solana/web3.js";

export const getInvitationFroProject = async (
    connection: Connection,
    project: PublicKey,
    commitment?: Commitment,
) => {

    const NEXUS_ADDRESS = new PublicKey("33cQK4yLQkRVBKtRWoSA2aYjTPDgEp3CM6EK8w6M2ALf");

    const INVITATION_OFFSET = 1;
    const programAccounts = await connection.getProgramAccounts(
        NEXUS_ADDRESS,
        {
            filters: [{ memcmp: { offset: INVITATION_OFFSET, bytes: project.toBase58() } }],
            commitment,
        }
    );

    console.log(programAccounts.length)
    const InvitationDatas: any[] = [];
    const coder = new BorshAccountsCoder(IDL);
    programAccounts.forEach((account) => {
        try {
            const InvitationData: any = coder.decode(
                "Invt",
                account.account.data
            );

            InvitationData.pubkey = account.pubkey;
            if (InvitationData) {
                InvitationDatas.push(
                    // ...account,
                    // parsed:
                    InvitationData
                );
            }
        } catch (e) {
            console.log(`Failed to decode token manager data`);
        }
    });
    return InvitationDatas
    // .sort((a, b) =>
    //     a.pubkey.toBase58().localeCompare(b.pubkey.toBase58())
    // );
};



