import {holodex} from '../index';

const client = new holodex({
  apiKey: 'API-KEY-HERE',
});

client.getChannel('UCoSrY_IQQVpmIRZ9Xf-y93g').then(channel => {
  console.log(channel.name);
  console.log(channel.stats);
  console.log(channel.type);
});
