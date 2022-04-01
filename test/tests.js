var expect = require('chai').expect;
const Channel = require('../src/Channel.js');
const { holodex } = require('../index.js');
const { showCompletionScript } = require('yargs');

describe('getChannel()', function() {
    it('should return a channel object', async function() { 
        const client = new holodex("b7edbc10-018f-4dfc-8048-6ee628cb2cf7")
        let channel = await client.getChannel('UCoSrY_IQQVpmIRZ9Xf-y93g')

        console.log(channel)

        expect(channel).to.be.instanceOf(Channel)
    });
});