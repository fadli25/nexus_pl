import {
    AnchorProvider,
    BN,
    Program, web3
} from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';
import { INVITATION_PREFIX, USER_PREFIX } from "../../constants/constants";
const idl = require("../../../data/nexus.json")

/**
    name: String,
    logo: String,
    link_discord: String,
    link_thread: String,
    link_website: String,
    link_twitter: String,
    category: String,
    project_overview: String,
    hiring: bool,
 */

export async function refuse_invite(
    anchorWallet: any,
    connection: web3.Connection,
    invitation_pubkey: PublicKey,
    project: PublicKey,
    wallet: any
) {

    const provider = new AnchorProvider(
        connection, anchorWallet, { "preflightCommitment": "processed" },
    );

    const PROGRAM_ID = new web3.PublicKey(idl.metadata.address)
    const program = new Program(idl, idl.metadata.address, provider);

    const [user] = web3.PublicKey.findProgramAddressSync(
        [
            anchorWallet.publicKey.toBuffer(),
            Buffer.from(USER_PREFIX),
        ],
        PROGRAM_ID
    );


    const tx = await program.methods.refuseInvt().accounts({
        invitation: invitation_pubkey,
        project: project,
        user: user,
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