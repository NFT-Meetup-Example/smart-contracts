const HDWalletProvider = require('@truffle/hdwallet-provider');
const TestRPC = require('ganache-cli');

module.exports = {
    networks: {
        development: {
            provider: TestRPC.provider(),
            network_id: '*'
        },
        rinkeby: {
            provider: () => new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/<>'),
            network_id: 4
        },
        mainnet: {
            provider: () => new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/v3/<>'),
            network_id: 1
        }
    },
    plugins: ["solidity-coverage"],
    compilers: {
        solc: {
            version: '^0.6.0',
            settings: {
                optimizer: {
                    enabled: true
                }
            }
        }
    }
};
