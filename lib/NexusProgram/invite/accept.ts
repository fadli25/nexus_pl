import {
    AnchorProvider,
    Program, web3
} from '@project-serum/anchor';
import { WalletContextState } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import { APA_PREFIX, USER_PREFIX } from "../../constants/constants";
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

export async function accept_invite(
    anchorWallet: any,
    connection: web3.Connection,
    invitation: PublicKey,
    project: PublicKey,
    wallet: WalletContextState
) {

    const provider = new AnchorProvider(
        connection, anchorWallet, { "preflightCommitment": "processed" },
    );

    const PROGRAM_ID = new web3.PublicKey(idl.metadata.address)
    const program = new Program(idl, idl.metadata.address, provider);
    const project_pubkey = new web3.PublicKey(project)

    const [user] = web3.PublicKey.findProgramAddressSync(
        [
            anchorWallet.publicKey.toBuffer(),
            Buffer.from(USER_PREFIX),
        ],
        PROGRAM_ID
    );

    const [apa] = web3.PublicKey.findProgramAddressSync(
        [
            project_pubkey.toBuffer(),
            anchorWallet.publicKey.toBuffer(),
            Buffer.from(APA_PREFIX),
        ],
        PROGRAM_ID
    );

    console.log(apa.toBase58())
    console.log(invitation.toBase58())
    const tx = await program.methods.acceptInvt().accounts({
        apa: apa,
        invitation: invitation,
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