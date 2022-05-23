const NFT = artifacts.require('./NFT');

module.exports = function(deployer) {
    deployer.then(async () => {
        await deployer.deploy(NFT, "Non-fungible_token", "NFT");
    });
};
