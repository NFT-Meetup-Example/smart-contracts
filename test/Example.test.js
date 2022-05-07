const Example = artifacts.require('Example');

contract('Example', (accounts) => {
    let example;
    const owner = accounts[0];

    beforeEach(async () => {
        example = await Example.new({ from: owner });
    });

    it('has correct magic number', async () => {
        await example.setMagic(31337);
        const value = await example.magic();
        assert.equal(value, 31337);
    });
});
