import {
    AnchorProvider,
    BN,
    Program, web3
} from '@project-serum/anchor';
import { USER_PREFIX } from "../../constants/constants";
const idl = require("../../../data/staking.json")

/**
    name: String,
    image: String,
    category: String,
    roles: String,
    level_of_expertise: String,
    payment_rate_per_hour: String,
    profile_overview: String,
    links: String,
    nigotion: Boolean,
 */

export async function init_user(
    anchorWallet: any,
    connection: web3.Connection,
    name: string,
    image: string,
    category: string,
    roles: string,
    level_of_expertise: string,
    links: string,
    profile_overview: string,
    payment_rate_per_hour: number,
    nigotion: boolean
) {

    const provider = new AnchorProvider(
        connection, anchorWallet, {"preflightCommitment": "processed"},
        );

    const PROGRAM_ID = new web3.PublicKey(idl.metadata.address)
    const program = new Program(idl, idl.metadata.address, provider);

    const [user] = web3.PublicKey.findProgramAddressSync(
        [
            anchorWallet.publicKey.toBuffer(),
            Buffer.from(USER_PREFIX),
        ],
        PROGRAM_ID
    );

        const tx = await program.methods.initUser({      
                name: name,
                image: image,
                category: category,
                roles: roles,
                level_of_expertise: level_of_expertise,
                links: links,
                profile_overview: profile_overview,
                payment_rate_per_hour: payment_rate_per_hour,
                nigotion: nigotion,
            }).accounts({
                user: user,
                authority: anchorWallet.publicKey,
                systemProgram: web3.SystemProgram.programId
        })
        // .transaction()
        .rpc({
            commitment: "confirmed",
        })

    return tx;
    }