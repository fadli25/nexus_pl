import {
    AnchorProvider,
    Program,
    web3,
} from "@project-serum/anchor";
import {
    TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { WalletContextState } from "@solana/wallet-adapter-react";
import {
    SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
} from "../../constants/constants";
const idl = require("../../../data/staking.json");

export async function tokenGate(
    anchorWallet: any,
    connection: web3.Connection,
    wallet: WalletContextState
) {
    const provider = new AnchorProvider(connection, anchorWallet, {
        preflightCommitment: "processed",
    });

    const PROGRAM_ID = new web3.PublicKey(idl.metadata.address);
    const program = new Program(idl, idl.metadata.address, provider);
    const mint = new web3.PublicKey(
        "HELL8DJW983gMsKfhmYxLqoAu87dufjKcWqcUkz9PHb8"
    );

    // const [identifier] = web3.PublicKey.findProgramAddressSync(
    //     [Buffer.from(IDENTIFIER_PREFIX)],
    //     PROGRAM_ID
    // );

    const [tracker] = web3.PublicKey.findProgramAddressSync(
        [
            anchorWallet.publicKey.toBuffer(),
        ],
        PROGRAM_ID
    );

    const [from] = web3.PublicKey.findProgramAddressSync(
        [
            anchorWallet.publicKey.toBuffer(),
            TOKEN_PROGRAM_ID.toBuffer(),
            mint.toBuffer(),
        ],
        SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID
    );

    const escrow = new web3.PublicKey(
        "Fig5f7CBQXNnNqoHWBCkPArxBxMBW8CoNyPH6UZhha4F"
    );

    const [to] = web3.PublicKey.findProgramAddressSync(
        [escrow.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), mint.toBuffer()],
        SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID
    );



    const tx = await program.methods
        .tokenGate()
        .accounts({
            tracker: tracker,
            from: from,
            to: to,
            mint: mint,
            escrow: escrow,
            payer: anchorWallet.publicKey,
            // identifier: identifier,
            tokenProgram: TOKEN_PROGRAM_ID,
            systemProgram: web3.SystemProgram.programId,
        })
        .transaction()
    // .rpc({
    //     commitment: "confirmed",
    // });


    wallet.sendTransaction(tx, connection, {
        preflightCommitment: "confirmed"
    })

    return tx;
}
