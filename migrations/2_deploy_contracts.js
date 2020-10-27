const Start = artifacts.require('./Start');

module.exports = function(deployer) {
    return deployer.deploy(Start);
};
