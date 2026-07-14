import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { WagmiProvider } from "wagmi";
import { polygon, sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "10dd96df3c1b27c7c028d125071be835";

// 2. Create wagmiConfig
const metadata = {
  name: "MetaHorseStaking",
  description: "MetaHorseStaking",
  url: "https://staking.metahorseunity.io/", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [sepolia, polygon];
const config = defaultWagmiConfig({
  chains, // required
  projectId, // required
  metadata, // required
});

// 3. Create modal
createWeb3Modal({
  defaultChain: sepolia,
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});


export function ContextProvider({ children }) {
  return (
    <WagmiProvider config={config}>
      {
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      }
    </WagmiProvider>
  );
}
