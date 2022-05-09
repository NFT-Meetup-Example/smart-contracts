const Example = artifacts.require('Example');

contract('Example', (accounts) => {
    const owner = accounts[0];

    beforeEach(async () => {
        this.example = await Example.new({ from: owner });
    });

    it('has correct magic number', async () => {
        await this.example.setMagic(31337);
        const value = await this.example.magic();
        assert.equal(value, 31337);
    });
});
