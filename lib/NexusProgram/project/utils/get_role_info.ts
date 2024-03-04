import { IDL } from "@/data/IDL";
import { BorshAccountsCoder } from "@coral-xyz/anchor";
import { AnchorProvider, Program, web3 } from '@project-serum/anchor';
import { USER_PREFIX } from "../../../constants/constants";
const idl = require("@/data/nexus.json")

export async function get_role_info(
    anchorWallet: any,
    connection: web3.Connection,
    role: string
) {
    try {
        const provider = new AnchorProvider(
            connection, anchorWallet, { "preflightCommitment": "processed" },
        );
        const PROGRAM_ID = new web3.PublicKey(idl.metadata.address)

        const role_pubkey = new web3.PublicKey(role)

        const program = new Program(idl, idl.metadata.address, provider);
        const account = await program.account.role.fetchNullable(role_pubkey, "confirmed");
        console.log(account);
        return account;
    } catch (e) {
        console.log(e);
    }
}