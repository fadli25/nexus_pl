import {
    AnchorProvider,
    BN,
    Program, web3
} from '@project-serum/anchor';
import { APA_PREFIX, USER_PREFIX } from "../../constants/constants";
const idl = require("../../../data/nexus.json")

export async function approve_apply(
    anchorWallet: any,
    connection: web3.Connection,
    project: web3.PublicKey,
    role: web3.PublicKey,
    user: web3.PublicKey,
    apply: web3.PublicKey,
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


    const [apa] = web3.PublicKey.findProgramAddressSync(
        [
            project.toBuffer(),
            user.toBuffer(),
            Buffer.from(APA_PREFIX),
        ],
        PROGRAM_ID
    );

    console.log(apa.toBase58())
    console.log(apply.toBase58())


    const tx = await program.methods.approveApply().accounts({
        apa: apa,
        apply: apply,
        role: role,
        founder: founder,
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