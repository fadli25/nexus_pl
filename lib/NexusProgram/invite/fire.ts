import {
    AnchorProvider,
    BN,
    Program, web3
} from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';
import { INVITATION_PREFIX, USER_PREFIX } from "../../constants/constants";
const idl = require("../../../data/nexus.json")

export async function fire(
    anchorWallet: any,
    connection: web3.Connection,
    apa: web3.PublicKey,
    project: web3.PublicKey,
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

    // const [invitation] = web3.PublicKey.findProgramAddressSync(
    //     [
    //         project.toBuffer(),
    //         user.toBuffer(),
    //         Buffer.from(INVITATION_PREFIX),
    //     ],
    //     PROGRAM_ID
    // );

    const escrow = new web3.PublicKey("Adnk67myShVeJwcDw2GqfCVcSoie3DiVMvERw1VxbJii")

    // console.log(invitation.toBase58())

    const tx = await program.methods.removeUser().accounts({
        apa: apa,
        project: project,
        escrow: escrow,
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