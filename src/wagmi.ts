import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import {
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains';
console.log('WalletConnectId  process.env',process.env)


import "dotenv/config";  
export const config = getDefaultConfig({
  appName: 'RainbowKit App',
//   projectId: 'a8c5eefb70a333734b210bc0ae848d8d',
projectId: '94066ab3be2718981f226c7407038ba4',
  chains: [
    mainnet,
    sepolia,
    polygon,
    optimism,
  ],
  transports: {
    // 替换之前 不可用的 https://rpc.sepolia.org/
    [sepolia.id]: http('https://sepolia.infura.io/v3/72bb160de1a9466eb20f836f93bcf3ce')
  },
  ssr: true,
});