const Start = artifacts.require('Start');

contract('Start', (accounts) => {
    let start;
    const owner = accounts[0];

    beforeEach(async () => {
        start = await Start.new({ from: owner });
    });

    it('has correct magic number', async () => {
        await start.setMagic(31337);
        const value = await start.magic();
        assert.equal(value, 31337);
    });
});
