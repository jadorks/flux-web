import Layout from "@/components/Layout";
import { FluxDappProvider } from "@/providers/PyroProvider/FluxDappProvider";
import "@/styles/globals.css";
import {
  Mainnet,
  DAppProvider,
  MetamaskConnector,
  CoinbaseWalletConnector,
} from "@usedapp/core";
import { WalletConnectConnector } from "@usedapp/wallet-connect-connector";

const config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: process.env.NEXT_PUBLIC_MAINNET_RPC_URL,
  },
  connectors: {
    metamask: new MetamaskConnector(),
    coinbase: new CoinbaseWalletConnector(),
    walletConnect: new WalletConnectConnector({
      chainId: Mainnet.chainId,
      rpc: {
        [Mainnet.chainId]: process.env.NEXT_PUBLIC_MAINNET_RPC_URL,
      },
    }),
  },
  autoConnect: true,
  noMetamaskDeactivate: true,
};

export default function App({ Component, pageProps }) {
  return (
    <DAppProvider config={config}>
      <FluxDappProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FluxDappProvider>
    </DAppProvider>
  );
}
