import { IDENTIFIER_PREFIX } from '@/lib/constants/constants';
import {
    AnchorProvider, BN, Program, web3
} from '@project-serum/anchor';
import {
    TOKEN_PROGRAM_ID,
    createAssociatedTokenAccountInstruction
} from "@solana/spl-token";
import { AnchorWallet, WalletContextState } from "@solana/wallet-adapter-react";
import { ComputeBudgetProgram, SYSVAR_INSTRUCTIONS_PUBKEY, SystemProgram } from '@solana/web3.js';
import { pdas } from '../../utils/pda';
const idl = require("../../../data/cnft.json");

const TOKEN_METADATA_PROGRAM_ID = new web3.PublicKey(
    'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
);
const META = new web3.PublicKey(
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
);
const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID: web3.PublicKey = new web3.PublicKey(
    'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
);
const sysvar_rant_pubkey: web3.PublicKey = new web3.PublicKey(
    'SysvarRent111111111111111111111111111111111',
);
const auth_rule_program: web3.PublicKey = new web3.PublicKey(
    'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg',
);



export async function PnftGate(
    anchorWallet: AnchorWallet,
    connection: web3.Connection,
    wallet: WalletContextState,
    mint: web3.PublicKey,
    collections: any,
    programable_config: any,
) {
    console.log(collections)
    let collection_mint;

    if (collections) {
        collection_mint = collections.key;
    } else {
        collection_mint = mint;
    }

    let ruleSet = null;

    if (programable_config !== null) {
        if (programable_config.ruleSet !== null) {
            ruleSet = programable_config.ruleSet;
            console.log(programable_config.ruleSet.toBase58())
        }
    }

    // const key = web3.Keypair.generate()

    const provider = new AnchorProvider(
        connection, anchorWallet, { "preflightCommitment": "processed" },
    );
    const program = new Program(idl, idl.metadata.address, provider);

    const PROGRAM_ID = new web3.PublicKey(idl.metadata.address)

    const [tracker] = web3.PublicKey.findProgramAddressSync(
        [
            anchorWallet.publicKey.toBuffer(),
        ],
        PROGRAM_ID
    );



    const tx = new web3.Transaction()

    // let blockhash = (await connection.getLatestBlockhash('finalized')).blockhash;
    // tx.recentBlockhash = blockhash;
    // tx.feePayer = new web3.PublicKey(anchorWallet.publicKey);

    const escrow = new web3.PublicKey(
        "DnzdyKpZ9GxTsEgVui1hjFVvLFgGSq1mQaA23utb1Nod"
    );

    // const [to] = web3.PublicKey.findProgramAddressSync(
    //     [
    //         escrow.toBuffer(),
    //         TOKEN_PROGRAM_ID.toBuffer(),
    //         mint.toBuffer(),
    //     ],
    //     SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID
    // );


    // const info = await connection.getBalance(to);
    // // create associted token account
    // if (info == 0) {
    //     // const ataTransaction = new web3.Transaction()
    //     tx.add(
    //         createAssociatedTokenAccountInstruction(
    //             anchorWallet.publicKey,
    //             to,
    //             escrow,
    //             mint!
    //         )
    //     );
    //     // const signature = await wallet.sendTransaction(ataTransaction, connection)
    //     // await connection.confirmTransaction(signature, "finalized");
    // }


    // const [destination_record_account] = web3.PublicKey.findProgramAddressSync(
    //     [
    //         Buffer.from('metadata'),
    //         META.toBuffer(),
    //         mint.toBuffer(),
    //         Buffer.from('token_record'),
    //         to.toBuffer()
    //     ],
    //     META
    // );

    const [token_account, metadata_acount, master_edition, record_account] = await pdas(anchorWallet.publicKey, mint)

    const [collection_metadata_acount] = web3.PublicKey.findProgramAddressSync(
        [
            Buffer.from('metadata'),
            META.toBuffer(),
            collection_mint.toBuffer(),
        ],
        META
    );


    // const modifyComputeUnits = ComputeBudgetProgram.setComputeUnitLimit({
    //     units: 600000
    // });

    // const addPriorityFee = ComputeBudgetProgram.setComputeUnitPrice({
    //     microLamports: 2000
    // });

    // tx.add(modifyComputeUnits)
    // tx.add(addPriorityFee)

    const [identifier] = web3.PublicKey.findProgramAddressSync(
        [
            Buffer.from(IDENTIFIER_PREFIX),
        ],
        PROGRAM_ID
    );
    // console.log("tracker: " + tracker.toBase58())
    // console.log("anchorWallet.publicKey: " + anchorWallet.publicKey.toBase58())
    // console.log("nftMintCollectionMetadata: " + collection_metadata_acount.toBase58())
    // console.log("mint: " + mint.toBase58())
    // console.log("from: " + token_account.toBase58())
    // console.log("escrow: " + escrow.toBase58())
    // console.log("nftMetadata: " + metadata_acount.toBase58())
    // console.log("master_edition: " + master_edition.toBase58())
    // console.log("record_account: " + record_account.toBase58())
    // console.log("destination_record_account: " + destination_record_account.toBase58())

    const rand = Math.random();

    let kind = 2;

    if (rand > 0.5) {
        kind = 1;
    } else {
        kind = 2;
    }
    const fees = new web3.PublicKey("Cvzgpt4zobKqp55r6gYEze6m9HUeqX6SvAYSwc6SS5se");

    console.log(kind);

    const transaction = await program.methods.pnftGate(
        new BN(kind)
    ).accounts({
        tracker: tracker,
        identifier: identifier,
        from: token_account,
        receiver: fees,
        payer: anchorWallet.publicKey,
        mint: mint,
        nftMintCollectionMetadata: collection_metadata_acount,
        systemProgram: web3.SystemProgram.programId,
        nftMetadata: metadata_acount,
        ownerTokenRecord: record_account,
        tokenMetadataProgram: META,
        splTokenProgram: TOKEN_METADATA_PROGRAM_ID,
        sysvarInstructions: SYSVAR_INSTRUCTIONS_PUBKEY,
        nftMasterEdition: master_edition,
        // to: to,
        // escrow: escrow,
        // token_program: TOKEN_METADATA_PROGRAM_ID,
        // rent: sysvar_rant_pubkey,
        // destinationTokenRecord: record_account,
        // splAtaProgram: SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
        // authRules: ruleSet ? ruleSet : META,
        // authRulesProgram: auth_rule_program,
    })
        // .rpc({
        //     "commitment": "confirmed"
        // })
        .transaction()

    tx.add(transaction)
    // await wallet.sendTransaction(tx, connection);

    return [tx, kind] as const

}

