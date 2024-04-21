import {
    AnchorProvider,
    BN,
    Program, web3
} from '@project-serum/anchor';
import { USER_PREFIX } from "../../constants/constants";
const idl = require("../../../data/nexus.json")

/**
    time: i64,
    payment: u64,
    role: String,
    level_of_experience: String,
    description: String,
 */

export async function close_role(
    anchorWallet: any,
    connection: web3.Connection,
    project: web3.PublicKey,
    role: web3.PublicKey,
    wallet: any
) {

    const provider = new AnchorProvider(
        connection, anchorWallet, { "preflightCommitment": "processed" },
    );

    const PROGRAM_ID = new web3.PublicKey(idl.metadata.address)
    const program = new Program(idl, idl.metadata.address, provider);

    const [founder] = web3.PublicKey.findProgramAddressSync(
        [
            anchorWallet.publicKey.toBuffer(),
            Buffer.from(USER_PREFIX),
        ],
        PROGRAM_ID
    );

    const tx = await program.methods.closeRole().accounts({
        role: role,
        founder: founder,
        project: project,
        authority: anchorWallet.publicKey,
        systemProgram: web3.SystemProgram.programId
    })
        .transaction()
    // .rpc({
    //     commitment: "confirmed",
    // })

    wallet.sendTransaction(tx, connection, {
        preflightCommitment: "confirmed"
    })
    return tx;
}