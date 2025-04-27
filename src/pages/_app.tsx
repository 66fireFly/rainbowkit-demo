import '@rainbow-me/rainbowkit/styles.css';
import {  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import Header from '../components/Header';
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
          <Header></Header>
         <Component {...pageProps}/>
        </RainbowKitProvider>
      </QueryClientProvider>
       </WagmiProvider> 
    )

}
export default MyApp