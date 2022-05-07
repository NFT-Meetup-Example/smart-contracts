const Example = artifacts.require('./Example');

module.exports = function(deployer) {
    return deployer.deploy(Example);
};
