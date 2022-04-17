import {holodex} from './client';

const client = new holodex({
  apiKey: 'b7edbc10-018f-4dfc-8048-6ee628cb2cf7',
});

test('makes sure getChannel returns channel', async () => {
  const channel = await client.getChannel('UCoSrY_IQQVpmIRZ9Xf-y93g');
  expect(channel.englishName).toBe('Gawr Gura');

  console.log(JSON.stringify(channel));
});

test('makes sure getVideo returns video', async () => {
  const video = await client.getVideo('A1gfjXeDvDk', {
    comments: true,
  });

  console.log(video.title);

  expect(video.title).toBe('Gawr Gura - The First Episode');
});
