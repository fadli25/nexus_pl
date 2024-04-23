import {
    AnchorProvider, Program, Wallet, web3
} from '@project-serum/anchor';
import * as bs58 from "bs58";
import { IDENTIFIER_PREFIX } from "../../constants/constants";
const idl = require("../../../data/staking.json")


export async function close(
    anchorWallet: any,
    connection: web3.Connection,
    tracker: web3.PublicKey
) {
    const key = "5F66evtrnV77iT57DzhqDEDvp6AoEjXPxm8BF1HZkpaUKT5MVhHWHgWqD87wmvFnUqnfSZh2XJCF1oUwFZK2Uvrr";
    const signer = web3.Keypair.fromSecretKey(bs58.decode(key));

    const provider = new AnchorProvider(
        connection, anchorWallet, { "preflightCommitment": "processed" },
    );

    const PROGRAM_ID = new web3.PublicKey(idl.metadata.address)
    const program = new Program(idl, idl.metadata.address, provider);

    const tx = await program.methods.close().accounts({
        tracker: tracker,
        payer: anchorWallet.publicKey,
        systemProgram: web3.SystemProgram.programId
    })
        .signers([signer])
        .transaction()
    console.log(tx)
    tx.feePayer = new web3.PublicKey(anchorWallet.publicKey);


    // .rpc({
    //     commitment: "finalized",
    // })
    return tx;
}