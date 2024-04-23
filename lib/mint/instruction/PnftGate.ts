import {
    AnchorProvider, BN, Program, web3
} from '@project-serum/anchor';
import {
    TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { AnchorWallet, WalletContextState } from "@solana/wallet-adapter-react";
import { ComputeBudgetProgram, SYSVAR_INSTRUCTIONS_PUBKEY, SystemProgram } from '@solana/web3.js';
import { pdas } from '../../utils/pda';
const idl = require("../../public/draffle.json");

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
    programable_config: any,
) {

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
        .add()
    let blockhash = (await connection.getLatestBlockhash('finalized')).blockhash;
    tx.recentBlockhash = blockhash;
    tx.feePayer = new web3.PublicKey(anchorWallet.publicKey);

    const escrow = new web3.PublicKey(
        "Fig5f7CBQXNnNqoHWBCkPArxBxMBW8CoNyPH6UZhha4F"
    );

    const [to] = web3.PublicKey.findProgramAddressSync(
        [
            escrow.toBuffer(),
            TOKEN_PROGRAM_ID.toBuffer(),
            mint.toBuffer(),
        ],
        SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID
    );


    const [destination_record_account] = web3.PublicKey.findProgramAddressSync(
        [
            Buffer.from('metadata'),
            META.toBuffer(),
            mint.toBuffer(),
            Buffer.from('token_record'),
            to.toBuffer()
        ],
        META
    );

    const [token_account, metadata_acount, master_edition, record_account] = await pdas(anchorWallet.publicKey, mint)

    const modifyComputeUnits = ComputeBudgetProgram.setComputeUnitLimit({
        units: 600000
    });

    const addPriorityFee = ComputeBudgetProgram.setComputeUnitPrice({
        microLamports: 2000
    });

    tx.add(modifyComputeUnits)
    tx.add(addPriorityFee)

    const transaction = await program.methods.createRaffle().accounts({
        tracker: tracker,
        payer: anchorWallet.publicKey,
        proceedsMint: mint,
        mint: mint,
        from: token_account,
        to: to,
        escrow: escrow,
        system_program: web3.SystemProgram.programId,
        token_program: TOKEN_METADATA_PROGRAM_ID,
        rent: sysvar_rant_pubkey,
        nftMetadata: metadata_acount,
        nftMasterEdition: master_edition,
        ownerTokenRecord: record_account,
        destinationTokenRecord: destination_record_account,
        splAtaProgram: SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
        splTokenProgram: TOKEN_METADATA_PROGRAM_ID,
        sysvarInstructions: SYSVAR_INSTRUCTIONS_PUBKEY,
        authRules: ruleSet ? ruleSet : META,
        authRulesProgram: auth_rule_program,
        tokenMetadataProgram: META
    })
        .transaction()

    tx.add(transaction)
    await wallet.sendTransaction(tx, connection);

    return tx

}

