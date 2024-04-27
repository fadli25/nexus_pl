import { IDL } from "@/data/IDL";
import { IDENTIFIER_PREFIX } from "@/lib/constants/constants";
import { BorshAccountsCoder } from "@coral-xyz/anchor";
import { AnchorProvider, Program, web3 } from '@project-serum/anchor';
const idl = require("@/data/cnft.json")

export async function getIdentifier(
    anchorWallet: any,
    connection: web3.Connection,
) {
    try {
        const provider = new AnchorProvider(
            connection, anchorWallet, { "preflightCommitment": "processed" },
        );
        const PROGRAM_ID = new web3.PublicKey(idl.metadata.address)

        const [indentifier, bump] = web3.PublicKey.findProgramAddressSync(
            [
                Buffer.from(IDENTIFIER_PREFIX)
            ],
            PROGRAM_ID
        );

        const program = new Program(idl, idl.metadata.address, provider);
        const account = await program.account.identifier.fetchNullable(indentifier, "confirmed");
        console.log(account);
        return account;
    } catch (e) {
        console.log(e);
    }
}