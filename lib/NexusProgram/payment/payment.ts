import {
    AnchorProvider, Program, web3
} from '@project-serum/anchor';
import { NEXUS_PREFIX } from "../../constants/constants";
const idl = require("../../../data/nexus.json")

export async function payment(
    anchorWallet: any,
    connection: web3.Connection,
    payment: web3.PublicKey,
    user: web3.PublicKey,
    founder: web3.PublicKey,
    wallet: any
) {

    const provider = new AnchorProvider(
        connection, anchorWallet, { "preflightCommitment": "processed" },
    );

    const PROGRAM_ID = new web3.PublicKey(idl.metadata.address)
    const program = new Program(idl, idl.metadata.address, provider);

    const [escrow] = web3.PublicKey.findProgramAddressSync(
        [
            Buffer.from(NEXUS_PREFIX),
        ],
        PROGRAM_ID
    );

    console.log("payment");
    console.log(escrow.toBase58());

    const tx = await program.methods.payment().accounts({
        payment: payment,
        founder: founder,
        reciever: user,
        address: anchorWallet.publicKey,
        escrow: escrow,
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