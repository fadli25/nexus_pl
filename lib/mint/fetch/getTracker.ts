import { IDL } from "@/data/IDL";
import { BorshAccountsCoder } from "@coral-xyz/anchor";
import { AnchorProvider, Program, web3 } from '@project-serum/anchor';
const idl = require("@/data/cnft.json")

export async function getTracker(
    anchorWallet: any,
    connection: web3.Connection,
) {
    try {
        const provider = new AnchorProvider(
            connection, anchorWallet, { "preflightCommitment": "processed" },
        );
        const PROGRAM_ID = new web3.PublicKey(idl.metadata.address)

        const [tracker, bump] = web3.PublicKey.findProgramAddressSync(
            [
                anchorWallet.publicKey.toBuffer()
            ],
            PROGRAM_ID
        );

        const program = new Program(idl, idl.metadata.address, provider);
        const account = await program.account.gate.fetchNullable(tracker, "confirmed");
        console.log(account);
        return account;
    } catch (e) {
        console.log(e);
    }
}