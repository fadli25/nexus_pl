import {
    AnchorProvider,
    BN,
    Program, web3
} from '@project-serum/anchor';
import { USER_PREFIX } from "../../constants/constants";
const idl = require("../../../data/nexus.json")

export async function apply_role(
    anchorWallet: any,
    connection: web3.Connection,
    project: web3.PublicKey,
    role: web3.PublicKey
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

    const [apply] = web3.PublicKey.findProgramAddressSync(
        [
            project.toBuffer(),
            user.toBuffer(),
        ],
        PROGRAM_ID
    );

    const tx = await program.methods.apply().accounts({
        apply: apply,
        role: role,
        project: project,
        user: user,
        authority: anchorWallet.publicKey,
        systemProgram: web3.SystemProgram.programId
    })
        // .transaction()
        .rpc({
            commitment: "confirmed",
        })

    return tx;
}