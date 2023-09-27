import {
    AnchorProvider, BN, Program, utils, Wallet, web3
} from '@project-serum/anchor';
import { IDENTIFIER_PREFIX, NEXUS_PREFIX, USER_PREFIX } from "../../constants/constants";
const idl = require("../../../data/nexus.json")

export async function one_time_payment(
    anchorWallet: any,
    connection: web3.Connection,
    user: web3.PublicKey,
) {

    const provider = new AnchorProvider(
        connection, anchorWallet, {"preflightCommitment": "processed"},
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

    const account = await program.account.identifier.fetch(identifier, "confirmed");

    const [payment, bump] = web3.PublicKey.findProgramAddressSync(
        [
            anchorWallet.publicKey.toBuffer(),
            new BN(Number(account.count)).toArrayLike(Buffer, "le", 8),
        ],
        PROGRAM_ID
        );
        
        
        const [founder] = web3.PublicKey.findProgramAddressSync(
            [
            Buffer.from(USER_PREFIX),
            anchorWallet.publicKey.toBuffer(),
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

        const tx = await program.methods.oneTimePayment().accounts({
            payment: payment,
            founder: founder,
            reciever: reciever,
            identifier: identifier,
            authority: anchorWallet.publicKey,
            escrow: escrow,
            systemProgram: web3.SystemProgram.programId
        })
        .transaction()
        // .rpc({
        //     commitment: "confirmed",
        // })
    return tx;
    }