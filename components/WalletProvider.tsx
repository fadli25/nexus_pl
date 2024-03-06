import {
  ConnectionProvider,
  WalletProvider
} from "@solana/wallet-adapter-react"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter
} from "@solana/wallet-adapter-wallets"
import React, { FC, useMemo } from "react"
require("@solana/wallet-adapter-react-ui/styles.css")

const Wallet = ({ children }: { children: React.ReactChild }) => {
  // const endpoint = "https://neat-still-vineyard.solana-mainnet.quiknode.pro/0799322a528958e6c600e7ecb87c49c99e6e6105/"
  // const endpoint = "https://solana-mainnet.g.alchemy.com/v2/fgDzvWeTBD6c_WB0ynEF4EnTvzcl6tX1"
  const endpoint = "https://solana-devnet.g.alchemy.com/v2/wu3MzoNxfqIV-tfWjcwAcuhBvHRWV14C"
  // const endpoint = "https://api.devnet.solana.com"

  const wallets = useMemo(
    () => [
      /**
       * Select the wallets you wish to support, by instantiating wallet adapters here.
       *
       * Common adapters can be found in the npm package `@solana/wallet-adapter-wallets`.
       * That package supports tree shaking and lazy loading -- only the wallets you import
       * will be compiled into your application, and only the dependencies of wallets that
       * your users connect to will be loaded.
       */
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new LedgerWalletAdapter(),
    ],
    []
  )

  return (
    <ConnectionProvider
      endpoint={endpoint}
      config={{ commitment: "confirmed" }}
    >
      <WalletProvider wallets={wallets} autoConnect={true}>
        <WalletModalProvider>
          {children}{" "}
          {/* Your app's components go here, nested within the context providers. */}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default Wallet
