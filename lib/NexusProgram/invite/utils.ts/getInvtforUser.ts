import { IDL } from "@/data/IDL";
import { USER_PREFIX } from "@/lib/constants/constants";
import { BorshAccountsCoder } from "@coral-xyz/anchor";
import { AnchorWallet } from "@solana/wallet-adapter-react";

import type { Commitment, Connection } from "@solana/web3.js";
import { PublicKey } from "@solana/web3.js";

export const getInvitationFroUser = async (
    connection: Connection,
    anchorWallet: AnchorWallet,
    commitment?: Commitment,
) => {

    const NEXUS_ADDRESS = new PublicKey("xce1Li2q1NYDBKvPbSEj6qA9fsoqEdYN4RHDaF9hBdn");
    const [user] = PublicKey.findProgramAddressSync(
        [
            anchorWallet.publicKey.toBuffer(),
            Buffer.from(USER_PREFIX),
        ],
        NEXUS_ADDRESS
    )

    console.log(user.toBase58());

    const INVITATION_OFFSET = 41;
    const programAccounts = await connection.getProgramAccounts(
        NEXUS_ADDRESS,
        {
            filters: [{ memcmp: { offset: INVITATION_OFFSET, bytes: user.toBase58() } }],
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



