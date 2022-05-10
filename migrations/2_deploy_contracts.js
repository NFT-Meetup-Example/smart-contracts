const Example = artifacts.require('./Example');
const NFT = artifacts.require('./NFT');

module.exports = function(deployer) {
    deployer.then(async () => {
        await deployer.deploy(Example);
        await deployer.deploy(NFT, "Non-fungible_token", "NFT");
    });
};
