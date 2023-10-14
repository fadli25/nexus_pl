import {
    AnchorProvider, BN, Program, utils, Wallet, web3
} from '@project-serum/anchor';
import { IDENTIFIER_PREFIX, NEXUS_PREFIX, USER_PREFIX } from "../../constants/constants";
import { init_identifier } from './init_identifier';
const idl = require("../../../data/nexus.json")


/**
"name": "paymentRatePerHour",
"type": "u64"
},
{
"name": "workingHours",
"type": "u64"
},
{
"name": "endAt",
"type": "i64"
},
{
"name": "roles",
"type": "string"
}
 */

export async function one_time_payment(
    anchorWallet: any,
    connection: web3.Connection,
    user: web3.PublicKey,
    role: string,
    totalAmount: number,
    workingTime: number,
    timeRate: number
) {

    const provider = new AnchorProvider(
        connection, anchorWallet, { "preflightCommitment": "processed" },
    );

    const PROGRAM_ID = new web3.PublicKey(idl.metadata.address)
    const program = new Program(idl, idl.metadata.address, provider);
    // const twitter_id_resp = await fetch("/api/twitter/get_session");
    // const twitter_id = (await twitter_id_resp.json()).twitter_id;

    const [identifier] = web3.PublicKey.findProgramAddressSync(
        [
            Buffer.from(IDENTIFIER_PREFIX),
        ],
        PROGRAM_ID
    );

    const balance = await connection.getBalance(identifier);
    let number = 0;
    if (balance == 0) {
        await init_identifier(anchorWallet, connection);
    } else {
        const account = await program.account.identifier.fetch(identifier, "confirmed");
        number = Number(account.count);
    }


    const [payment, bump] = web3.PublicKey.findProgramAddressSync(
        [
            anchorWallet.publicKey.toBuffer(),
            new BN(number).toArrayLike(Buffer, "le", 8),
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

    const [reciever] = web3.PublicKey.findProgramAddressSync(
        [
            Buffer.from(USER_PREFIX),
            user.toBuffer(),
        ],
        PROGRAM_ID
    );

    const [escrow] = web3.PublicKey.findProgramAddressSync(
        [
            Buffer.from(NEXUS_PREFIX),
        ],
        PROGRAM_ID
    );



    console.log("init payment");
    console.log(founder.toBase58());

    const tx = await program.methods.recuringPayment({
        roles: role,
        totalAmount: new BN(totalAmount * web3.LAMPORTS_PER_SOL),
        workingTime: new BN(workingTime),
        timeRate: new BN(timeRate)
    }).accounts({
        payment: payment,
        founder: founder,
        reciever: user,
        identifier: identifier,
        authority: anchorWallet.publicKey,
        escrow: escrow,
        systemProgram: web3.SystemProgram.programId
    })
        // .transaction()
        .rpc({
            commitment: "confirmed",
        })
    return tx;
}