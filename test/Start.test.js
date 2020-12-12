const Start = artifacts.require('Start');
const BigNumber = require('bignumber.js');

contract('Start', (accounts) => {
    let start;

    beforeEach(async () => {
        start = await Start.new();
    });

    it('has correct magic number', async () => {
        await start.setMagic((new BigNumber(31337).multipliedBy(1e+18)).toString(10));
        const value = await start.magic();
        assert.equal(value, (new BigNumber(31337).multipliedBy(1e+18)).toString(10));
    });
})
