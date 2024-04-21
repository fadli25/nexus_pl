import {
    AnchorProvider,
    BN,
    Program, web3
} from '@project-serum/anchor';
import { USER_PREFIX } from "../../constants/constants";
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

export async function update_project(
    anchorWallet: any,
    connection: web3.Connection,
    projectId: string,
    logo: string,
    category: string,
    linkDiscord: string,
    linkThread: string,
    linkTwitter: string,
    linkWebsite: string,
    projectOverview: string,
    departments: string,
    hiring: boolean,
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

    const project = new web3.PublicKey(projectId)

    const tx = await program.methods.updateProject({
        logo: logo,
        linkDiscord: linkDiscord,
        linkThread: linkThread,
        linkWebsite: linkWebsite,
        linkTwitter: linkTwitter,
        projectOverview: projectOverview,
        category: category,
        hiring: hiring,
        departments
    }).accounts({
        project: project,
        founder: founder,
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