import {holodex} from '../index';

const client = new holodex({
  apiKey: 'b7edbc10-018f-4dfc-8048-6ee628cb2cf7',
});

client.getChannel('UCoSrY_IQQVpmIRZ9Xf-y93g').then(channel => {
  console.log(channel.name);
  console.log(channel.stats);
  console.log(channel.type); // 'vtuber'
});
