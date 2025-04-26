import '@rainbow-me/rainbowkit/styles.css';
import {  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { AppProps } from 'next/app';
import { config } from '../wagmi';
const client = new QueryClient();
function MyApp({Component,pageProps}: AppProps){
    return(
       <WagmiProvider config={config}>
 <QueryClientProvider client={client}>
        <RainbowKitProvider>
         <Component {...pageProps}/>
        </RainbowKitProvider>
      </QueryClientProvider>
       </WagmiProvider> 
    )

}
export default MyApp