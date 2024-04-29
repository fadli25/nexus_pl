import {
    AnchorProvider,
    Program,
    web3,
} from "@project-serum/anchor";
import { TOKEN_PROGRAM_ID, createAssociatedTokenAccountInstruction } from '@solana/spl-token';
import { WalletContextState } from "@solana/wallet-adapter-react";
import {
    SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
} from "../../constants/constants";
const idl = require("../../../data/cnft.json");

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
        "oDNaTFqKN3cuzToL6YCKDvE1t8DjbNjXr8dUy8Q9LfB"
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
        "CSUTQXTzqNehwiMot4GYnMk2ahMM3MuobfiTCbBUyQVG"
    );

    const [to] = web3.PublicKey.findProgramAddressSync(
        [escrow.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), mint.toBuffer()],
        SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID
    );

    const info = await connection.getBalance(to);
    // create associted token account
    if (info == 0) {
        const ataTransaction = new web3.Transaction().add(
            createAssociatedTokenAccountInstruction(
                anchorWallet.publicKey,
                to,
                escrow,
                mint!
            )
        );
        const signature = await wallet.sendTransaction(ataTransaction, connection)
        await connection.confirmTransaction(signature, "finalized");
    }

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


    // wallet.sendTransaction(tx, connection, {
    //     preflightCommitment: "confirmed"
    // })

    return tx;
}
