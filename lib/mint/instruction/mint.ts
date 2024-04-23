import { PROGRAM_ID as BUBBLEGUM_PROGRAM_ID } from "@metaplex-foundation/mpl-bubblegum";
import {
  PROGRAM_ID as TOKEN_METADATA_PROGRAM_ID,
} from "@metaplex-foundation/mpl-token-metadata";
import {
  AnchorProvider, BN, Program, web3
} from '@project-serum/anchor';
import { SPL_ACCOUNT_COMPRESSION_PROGRAM_ID, SPL_NOOP_PROGRAM_ID } from "@solana/spl-account-compression";
import { AnchorWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from '@solana/web3.js';
import { IDENTIFIER_PREFIX } from "../../constants/constants";
const idl = require("../../../data/staking.json");

export async function mint(
  anchorWallet: AnchorWallet,
  connection: web3.Connection,
) {

  const mint = web3.Keypair.generate();

  const provider = new AnchorProvider(
    connection, anchorWallet, { "preflightCommitment": "processed" },
  );

  const PROGRAM_ID = new web3.PublicKey(idl.metadata.address)
  const program = new Program(idl, idl.metadata.address, provider);

  const merkleTree = new web3.PublicKey("trJuNumHhtzXpw522oB256fVT28pJf7ZyUmnXMsmeBE")

  const [escrow, _bump] = PublicKey.findProgramAddressSync(
    [Buffer.from("cnft")],
    PROGRAM_ID,
  );

  console.log(escrow.toBase58());

  const [treeAuthority, pbump] = PublicKey.findProgramAddressSync(
    [merkleTree.toBuffer()],
    BUBBLEGUM_PROGRAM_ID,
  );

  const [identifier] = web3.PublicKey.findProgramAddressSync(
    [
      Buffer.from(IDENTIFIER_PREFIX),
    ],
    PROGRAM_ID
  );

  const [tracker, bump] = web3.PublicKey.findProgramAddressSync(
    [
      mint.publicKey.toBuffer()
    ],
    PROGRAM_ID
  );


  const collectionMint = new PublicKey("CouYPCw226TXUirdFtDBbFxUZtJFgSm66SzvpruN7VAz")
  const [collectionMetadataAccount, _b1] = PublicKey.findProgramAddressSync(
    [
      Buffer.from("metadata", "utf8"),
      TOKEN_METADATA_PROGRAM_ID.toBuffer(),
      collectionMint.toBuffer(),
    ],
    TOKEN_METADATA_PROGRAM_ID
  );
  const [collectionEditionAccount, _b2] = PublicKey.findProgramAddressSync(
    [
      Buffer.from("metadata", "utf8"),
      TOKEN_METADATA_PROGRAM_ID.toBuffer(),
      collectionMint.toBuffer(),
      Buffer.from("edition", "utf8"),
    ],
    TOKEN_METADATA_PROGRAM_ID
  );
  const [bgumSigner, __] = PublicKey.findProgramAddressSync(
    [Buffer.from("collection_cpi", "utf8")],
    BUBBLEGUM_PROGRAM_ID
  );

  const fees = new web3.PublicKey("8wqL47iovmr1czQ1KLinNb4D35cTxRV4wQL9m1HuAu7Q");

  console.log("wow")
  const tx = await program.methods.handleInitCounter().accounts({
    tracker: tracker,
    mint: mint.publicKey,
    identifier: identifier,
    treeAuthority: treeAuthority,
    leafOwner: anchorWallet.publicKey,
    leafDelegate: anchorWallet.publicKey,
    merkleTree: merkleTree,
    payer: anchorWallet.publicKey,
    treeDelegate: anchorWallet.publicKey,
    collectionAuthority: escrow,
    receiver: fees,
    collectionAuthorityRecordPda: BUBBLEGUM_PROGRAM_ID,
    collectionMint: collectionMint,
    collectionMetadata: collectionMetadataAccount,
    editionAccount: collectionEditionAccount,
    logWrapper: SPL_NOOP_PROGRAM_ID,
    compressionProgram: SPL_ACCOUNT_COMPRESSION_PROGRAM_ID,
    bubblegumSigner: bgumSigner,
    bubblegumProgram: BUBBLEGUM_PROGRAM_ID,
    systemProgram: web3.SystemProgram.programId,
    tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
  })
    .transaction();
  // .rpc()

  let blockhash = (await connection.getLatestBlockhash('finalized')).blockhash;
  tx.recentBlockhash = blockhash;
  tx.feePayer = new web3.PublicKey(anchorWallet.publicKey);

  return tx;
}

