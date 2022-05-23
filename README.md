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
npm run deploy:rinkeby
```

BSC testnet
```
npm run deploy:testnet
```

Mumbai - Polygon testnet
```
npm run deploy:mumbai
```

Ethereum mainnet
```
npm run deploy:eth
```

BSC mainnet
```
npm run deploy:bsc
```

Polygon mainnet
```
npm run deploy:polygon
```

## Verify contracts
etherscan.io
```
npx truffle run verify NFT@YOUR_ADDRESS_CONTRACT --network eth
```

bscscan.com
```
npx truffle run verify NFT@YOUR_ADDRESS_CONTRACT --network bsc
```

polygonscan.com
```
npx truffle run verify NFT@YOUR_ADDRESS_CONTRACT --network polygon
```