import { metaMask, metaMaskHooks } from "@/connectors/metaMask";
import { walletConnect, walletConnectHooks } from "@/connectors/walletConnect";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { MetaMask } from '@web3-react/metamask'
import type { WalletConnect } from '@web3-react/walletconnect-v2'
import { Web3ReactHooks, Web3ReactProvider } from "@web3-react/core";

const connectors: [MetaMask | WalletConnect, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks]
]

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider connectors={connectors}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}
