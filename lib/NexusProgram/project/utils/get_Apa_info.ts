import { IDL } from "@/data/IDL";
import { BorshAccountsCoder } from "@coral-xyz/anchor";
import { AnchorProvider, Program, web3 } from '@project-serum/anchor';
import { USER_PREFIX } from "../../../constants/constants";
const idl = require("@/data/nexus.json")

export async function get_apa_info(
    anchorWallet: any,
    connection: web3.Connection,
    apa: string
) {
    try {
        const provider = new AnchorProvider(
            connection, anchorWallet, { "preflightCommitment": "processed" },
        );

        const apa_pubkey = new web3.PublicKey(apa)

        console.log(apa_pubkey.toBase58())
        const account = await connection.getAccountInfo(apa_pubkey);
        console.log(account?.data.length)
        let apa_data;
        const program = new Program(idl, idl.metadata.address, provider);

        const coder = new BorshAccountsCoder(IDL);
        try {
            apa_data = coder.decode(
                "APA",
                account?.data!
            );;
        } catch (e) {
            console.log(`Failed to decode token manager data`);
        }
        console.log(apa_data)
        // const account = await program.account.apa.fetch(apa_pubkey);
        return apa_data;
    } catch (e) {
        console.log(e);
    }
}