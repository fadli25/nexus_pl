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

export async function update_authority(
  anchorWallet: AnchorWallet,
  connection: web3.Connection,
) {

  const new_update_authority = new web3.PublicKey("6Z648dSA7JcW5t8Hr741uDpRELqHGkqxEg4oy8TSwfwo");

  const provider = new AnchorProvider(
    connection, anchorWallet, { "preflightCommitment": "processed" },
  );

  const PROGRAM_ID = new web3.PublicKey(idl.metadata.address)
  const program = new Program(idl, idl.metadata.address, provider);


  const [escrow, _bump] = PublicKey.findProgramAddressSync(
    [Buffer.from("cnft")],
    PROGRAM_ID,
  );

  const collectionMint = new PublicKey("CouYPCw226TXUirdFtDBbFxUZtJFgSm66SzvpruN7VAz");

  const [collectionMetadataAccount, _b1] = PublicKey.findProgramAddressSync(
    [
      Buffer.from("metadata", "utf8"),
      TOKEN_METADATA_PROGRAM_ID.toBuffer(),
      collectionMint.toBuffer(),
    ],
    TOKEN_METADATA_PROGRAM_ID
  );

  console.log("wow")
  const tx = await program.methods.updateAuthority().accounts({
    authority: anchorWallet.publicKey,
    tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
    metadata: collectionMetadataAccount,
    newAuthority: new_update_authority,
    escrow: escrow,
    systemProgram: web3.SystemProgram.programId,
  })
    .rpc()
  return tx;
}

