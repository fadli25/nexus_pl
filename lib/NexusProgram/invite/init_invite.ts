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

export async function invites(
    anchorWallet: any,
    connection: web3.Connection,
    project: string,
    _user: PublicKey,
    role: string,
) {

    const provider = new AnchorProvider(
        connection, anchorWallet, { "preflightCommitment": "processed" },
    );

    const PROGRAM_ID = new web3.PublicKey(idl.metadata.address)
    const program = new Program(idl, idl.metadata.address, provider);
    const project_pubkey = new web3.PublicKey(project)

    const [user] = web3.PublicKey.findProgramAddressSync(
        [
            _user.toBuffer(),
            Buffer.from(USER_PREFIX),
        ],
        PROGRAM_ID
    );
    const [founder] = web3.PublicKey.findProgramAddressSync(
        [
            anchorWallet.publicKey.toBuffer(),
            Buffer.from(USER_PREFIX),
        ],
        PROGRAM_ID
    );

    const [invitation] = web3.PublicKey.findProgramAddressSync(
        [
            project_pubkey.toBuffer(),
            user.toBuffer(),
            Buffer.from(INVITATION_PREFIX),
        ],
        PROGRAM_ID
    );

    console.log(invitation.toBase58())

    const tx = await program.methods.initInvitation(role).accounts({
        invitation: invitation,
        project: project,
        founder: founder,
        user: user,
        authority: anchorWallet.publicKey,
        systemProgram: web3.SystemProgram.programId
    })
        .rpc({
            commitment: "confirmed",
        })

    return tx;
}