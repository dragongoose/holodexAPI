import {holodex} from './client';
import 'dotenv/config';

if (!process.env.HOLODEX_API_KEY) {
  throw Error('Please set HOLODEX_API_KEY in your .env file');
}

const apiKey = process.env.HOLODEX_API_KEY;

const client = new holodex({
  apiKey,
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
});

test('makes sure getVideo has clips', async () => {
  const video = await client.getVideo('A1gfjXeDvDk', {
    comments: true,
    lang: 'EN',
  });

  expect(video.clips.length).toBeGreaterThan(0);
});

test('makes sure getVideo has comments', async () => {
  const video = await client.getVideo('A1gfjXeDvDk', {
    comments: true,
    lang: 'EN',
  });

  expect(video.comments.length).toBeGreaterThan(0);
});

test('makes sure getVideo has channel', async () => {
  const video = await client.getVideo('A1gfjXeDvDk', {
    comments: true,
    lang: 'EN',
  });

  expect(video.channel.english_name).toBe('Gawr Gura');
});

test('makes sure getVideo has recommendations', async () => {
  const video = await client.getVideo('A1gfjXeDvDk', {
    comments: true,
    lang: 'EN',
  });

  expect(video.recommendations.length).toBeGreaterThan(0);
});

test('make sure getVideo recommendation have a title', async () => {
  const video = await client.getVideo('A1gfjXeDvDk', {
    comments: true,
    lang: 'EN',
  });

  const recommendation = video.recommendations[0];
  // Check all of the recommendation's values

  expect(recommendation.id).toBeDefined();
  expect(recommendation.title).toBeDefined();
  expect(recommendation.type).toBeDefined();
  expect(recommendation.topicId).toBeDefined();
  expect(recommendation.publishedAt).toBeDefined();
  expect(recommendation.availableAt).toBeDefined();
  expect(recommendation.duration).toBeDefined();
  expect(recommendation.status).toBeDefined();
  expect(recommendation).toHaveProperty('liveTlCount');
  expect(recommendation.channelId).toBeDefined();
});
