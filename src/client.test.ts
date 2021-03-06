import {holodex} from './client';
import 'dotenv/config';
import {PaginatedObject, VideoIncludes, VideoMin} from './types';

if (!process.env.HOLODEX_API_KEY) {
  throw Error('Please set HOLODEX_API_KEY in your .env file');
}

jest.setTimeout(30000);

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

  expect(video.channel.englishName).toBe('Gawr Gura');
});

test('make sure getVideos has videos', async () => {
  const videos: VideoMin[] = await client.getVideos({
    include: [
      VideoIncludes.Mentions,
      VideoIncludes.ChannelStats,
      VideoIncludes.Refers,
      VideoIncludes.descriptions,
      VideoIncludes.Simulcasts,
      VideoIncludes.Clips,
    ],
    limit: 50,
    id: 'J-2uaAyChew',
    paginated: false,
  });

  // Check all of the video's values
  expect(videos[0].id).toBeDefined();
  expect(videos[0].title).toBeDefined();
  expect(videos[0].type).toBeDefined();
  expect(videos[0].topicId).toBeDefined();
  expect(videos[0].publishedAt).toBeDefined();
  expect(videos[0].availableAt).toBeDefined();
  expect(videos[0].duration).toBeDefined();
  expect(videos[0].status).toBeDefined();
  expect(videos[0]).toHaveProperty('liveTlCount');
  expect(videos[0].channel).toBeDefined();
  expect(videos[0].channel.stats).toBeDefined();
  expect(videos[0].channel.stats.videoCount).toBeGreaterThan(0);
  expect(videos.length).toBeGreaterThan(0);
  expect(videos[0].refers!.length).toBeGreaterThanOrEqual(0);
  expect(videos[0].mentions!.length).toBeGreaterThanOrEqual(0);
  expect(videos[0]).toHaveProperty('description');
  expect(videos[0].clips!.length).toBeGreaterThanOrEqual(0);
});

test('make sure searchVideos has videos', async () => {
  const videos: PaginatedObject = await client.searchVideos({
    limit: 20,
    paginated: true,
  });

  expect(videos.items.length).toBeGreaterThan(0);
  expect(videos.total).toBeGreaterThan(0);
});

test('make sure searchVideos has videos, unpaginated', async () => {
  const videos: VideoMin[] = await client.searchVideos({
    limit: 20,
    paginated: false,
  });

  expect(videos.length).toBeGreaterThan(0);
});

test('make sure searchComments() has comments', async () => {
  const comments: PaginatedObject = await client.searchComments({
    limit: 20,
    paginated: true,
  });

  expect(comments.items.length).toBeGreaterThan(0);
  expect(comments.total).toBeGreaterThan(0);

  const coms = comments.items[0].comments;
  expect(coms.length).toBeGreaterThan(0);
  expect(coms[0].message).toBeDefined();
});

test('make sure searchComments() has comments, unpaginated', async () => {});
