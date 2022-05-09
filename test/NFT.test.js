const { BN, ether } = require('@openzeppelin/test-helpers');

const NFT = artifacts.require('NFT');

contract('NFT', (accounts) => {
    const owner = accounts[0];
    const recipient = accounts[1];

    beforeEach(async () => {
        this.nft = await NFT.new('Non-fungible_token', 'NFT', { from: owner });
    });

    it('has correct data', async () => {
        const name = await this.nft.name();
        assert.equal(name, 'Non-fungible_token');

        const symbol = await this.nft.symbol();
        assert.equal(symbol, "NFT");

        const totalSupply = await this.nft.totalSupply();
        assert.equal(totalSupply, 0);
    });

    it('has correct mint', async () => {
        await this.nft.mint({ from: recipient, value: ether('1') });

        const balance = await this.nft.balanceOf(recipient);
        assert.equal(balance, 1);

        const totalSupply = await this.nft.totalSupply();
        assert.equal(totalSupply, 1);

        const balanceNFT = await web3.eth.getBalance(this.nft.address);
        assert.equal(balanceNFT, ether('1'));

        await this.nft.withdraw({ from: owner });
        const balanceOwner = await web3.eth.getBalance(owner);
        assert.equal(balanceOwner, '100990050241141401460');
    });
});
