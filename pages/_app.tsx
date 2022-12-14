import "../styles/globals.css";
import type {AppProps} from "next/app";

import {ThirdwebProvider} from "@thirdweb-dev/react";

import network from "../utils/network";
import Layout from "../components/ui/Layout";
import {WalletProvider} from "../context/WalletProvider";

export default function App({Component, pageProps}: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={network}>
      <WalletProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WalletProvider>
    </ThirdwebProvider>
  );
}
