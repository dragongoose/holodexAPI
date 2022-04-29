import {holodex} from '../index';

const client = new holodex({
  apiKey: 'API-KEY-HERE',
});

client
  .getVideo('A1gfjXeDvDk', {
    comments: true,
    lang: 'EN',
  })
  .then(video => {
    console.log(video.title);
    console.log(video.channel.english_name);
    console.log(video.mentions.length);
    console.log(video.clips.length);
    console.log(video.comments.length);
    console.log(video.recommendations.length);
  });
