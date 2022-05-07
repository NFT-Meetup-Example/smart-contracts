const HDWalletProvider = require('@truffle/hdwallet-provider');
const TestRPC = require('ganache');

module.exports = {
    networks: {
        development: {
            provider: TestRPC.provider(),
            network_id: '*'
        },
        rinkeby: {
            provider: () => new HDWalletProvider(process.env.PRIVKEY, 'https://rinkeby.infura.io/v3/<YOUR_KEY>'),
            network_id: 4
        },
        eth: {
            provider: () => new HDWalletProvider(process.env.PRIVKEY, 'https://mainnet.infura.io/v3/<YOUR_KEY>'),
            network_id: 1
        },
        testnet: {
            provider: () => new HDWalletProvider(process.env.PRIVKEY, 'https://data-seed-prebsc-1-s3.binance.org:8545'),
            network_id: 97,
            confirmations: 2,
            skipDryRun: true,
            networkCheckTimeout: 500000000,
            timeoutBlocks: 20000,
        },
        bsc: {
            provider: () => new HDWalletProvider(process.env.PRIVKEY, 'https://bsc.getblock.io/mainnet/?api_key=<YOUR_KEY>'),
            network_id: 56,
            confirmations: 2,
            skipDryRun: true,
            networkCheckTimeout: 500000000,
            gasPrice: 10000000000,
        }
    },
    plugins: ["solidity-coverage"],
    compilers: {
        solc: {
            version: '^0.8.0',
            settings: {
                optimizer: {
                    enabled: true
                }
            }
        }
    }
};
