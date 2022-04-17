import {holodex} from './client';

const client = new holodex({
  apiKey: 'b7edbc10-018f-4dfc-8048-6ee628cb2cf7',
});

test('makes sure getChannel returns channel', async () => {
  const channel = await client.getChannel('UCoSrY_IQQVpmIRZ9Xf-y93g');
  expect(channel.englishName).toBe('Gawr Gura');
});

test('makes sure getVideo returns video', async () => {
  const video = await client.getVideo('A1gfjXeDvDk', {
    comments: true,
    lang: 'EN',
  });
  expect(video.title).toBe('FORTNITE');
});

test('makes sure getVideo has mentions', async () => {
  const video = await client.getVideo('A1gfjXeDvDk', {
    comments: true,
    lang: 'EN',
  });
  expect(video.mentions.length).toBeGreaterThan(0);
  expect(video.mentions[0].englishName).toBe('Ceres Fauna');
});

test('makes sure getVideo has clips', async () => {
  const video = await client.getVideo('A1gfjXeDvDk', {
    comments: true,
    lang: 'EN',
  });

  expect(video.clips[0].title).toBe(
    '𝐅𝐨𝐫𝐭𝐧𝐢𝐭𝐞 𝐓𝐨𝐩 𝟏 𝐛𝐞𝐬𝐭 𝐩𝐨𝐠𝐠𝐞𝐫𝐬 𝐭𝐞𝐚𝐦 【𝘾𝙤𝙡𝙡𝙖𝙗 𝙁𝙖𝙪𝙣𝙖 𝙂𝙪𝙧𝙖 𝙈𝙪𝙢𝙚𝙞】'
  );
  expect(video.clips.length).toBeGreaterThan(0);
});
