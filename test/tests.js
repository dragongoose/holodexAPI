const expect = require('chai').expect;
const Channel = require('../src/Channel.js');
const {holodex} = require('../index.js');
require('dotenv').config();

describe('getChannel()', () => {
  it('should return a channel object', async () => {
    const client = new holodex({apiKey: process.env.API_KEY});
    const channel = await client.getChannel('UCoSrY_IQQVpmIRZ9Xf-y93g');

    console.log(channel);

    expect(channel).to.be.instanceOf(Channel);
  });
});
