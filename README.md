# solidity-starter
Starter project for solidity smart contract

## Version

**Node.js**: ^12.22.3

**npm**: ^6.14.13

## Install Dependencies

```
npm i
```

## Test contracts

```
npm run test
```

## Deploy contracts
Rinkeby - Ethereum testnet
```
PRIVKEY=YOUR_KEY npm run deploy:rinkeby
```

BSC testnet
```
PRIVKEY=YOUR_KEY npm run deploy:testnet
```

Ethereum mainnet
```
PRIVKEY=YOUR_KEY npm run deploy:eth
```

BSC mainnet
```
PRIVKEY=YOUR_KEY npm run deploy:bsc
```

## Verify contracts
etherscan.io
```
PRIVKEY=YOUR_KEY ETHERSCANAPIKEY=YOUR_KEY npx truffle run verify NFT@YOUR_ADDRESS_CONTRACT --network eth
```

bscscan.com
```
PRIVKEY=YOUR_KEY BSCSCANAPIKEY=YOUR_KEY npx truffle run verify NFT@YOUR_ADDRESS_CONTRACT --network bsc
```