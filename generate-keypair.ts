import { config } from "dotenv"
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
config()

const keypair = getKeypairFromEnvironment("SECRET_KEY");
console.log("👌 Fetched Keypair !");
console.log("The public key is: ", keypair.publicKey.toBase58())