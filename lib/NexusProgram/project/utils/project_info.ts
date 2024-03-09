import { AnchorProvider, Program, web3 } from '@project-serum/anchor';
import { USER_PREFIX } from "../../../constants/constants";
const idl = require("../../../../data/nexus.json")

export async function get_project_info(
    anchorWallet: any,
    connection: web3.Connection,
    project: string
) {
    try {
        const provider = new AnchorProvider(
            connection, anchorWallet, { "preflightCommitment": "processed" },
        );
        const PROGRAM_ID = new web3.PublicKey(idl.metadata.address)

        const project_pubkey = new web3.PublicKey(project)

        const program = new Program(idl, idl.metadata.address, provider);
        const account = await program.account.project.fetchNullable(project_pubkey, "confirmed");
        if (account) {
            account.pubkey = project_pubkey;
        }
        console.log(account);
        return account;
    } catch (e) {
        console.log(e);
    }
}