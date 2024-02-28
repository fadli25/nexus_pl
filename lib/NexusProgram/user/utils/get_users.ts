import { IDL } from "@/data/IDL";
import { BorshAccountsCoder } from "@coral-xyz/anchor";
import { Commitment, Connection, PublicKey } from "@solana/web3.js";

export const getUsers = async (
    connection: Connection,
    commitment?: Commitment,
) => {

    const NEXUS_ADDRESS = new PublicKey("33cQK4yLQkRVBKtRWoSA2aYjTPDgEp3CM6EK8w6M2ALf");

    const USER_LENGTH = 376;
    const programAccounts = await connection.getProgramAccounts(
        NEXUS_ADDRESS,
        {
            filters: [{ dataSize: USER_LENGTH }],
            commitment,
        }
    );

    console.log(programAccounts.length)
    const UserDatas: any[] = [];
    const coder = new BorshAccountsCoder(IDL);
    programAccounts.forEach((account) => {
        try {
            console.log(account.pubkey.toBase58())
            const UserData: any = coder.decode(
                "User",
                account.account.data
            );

            UserData.pubkey = account.pubkey;
            if (UserData) {
                UserDatas.push(
                    // ...account,
                    // parsed:
                    UserData
                );
            }
        } catch (e) {
            console.log(`Failed to decode token manager data`);
        }
    });
    return UserDatas
    // .sort((a, b) =>
    //     a.pubkey.toBase58().localeCompare(b.pubkey.toBase58())
    // );
};



