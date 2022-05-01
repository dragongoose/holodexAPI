import fetch from 'node-fetch';
import {
  VideoSearchOptions,
  Channel,
  HolodexApiOptions,
  Video,
  VideoMin,
  RawVideoMin,
  RawChannel,
  RawVideo,
} from './types';
import {MultiVideoSearchOptions} from './types/MultiVideoSearchOptions';

import NodeCache from 'node-cache';
const cache = new NodeCache({
  //2 minutes
  stdTTL: 120,
  checkperiod: 120,
  deleteOnExpire: true,
});

/**
 * A class representing the holodex api
 */
export class holodex {
  public key: string;
  public baseUrl: string;
  public headers: {};
  public fetch;

  constructor(options: HolodexApiOptions) {
    this.key = options.apiKey;
    this.baseUrl = 'https://holodex.net/api/v2';
    this.headers = {
      'Content-Type': 'application/json',
      'X-APIKEY': this.key,
    };
    this.fetch = fetch;
  }

  /**
   * Get a channel by id
   * @param id The id of the channel
   * @returns {Promise<Channel>}
   * @example
   * ```javascript
   * holodex.getChannel('UCoSrY_IQQVpmIRZ9Xf-y93g').then(channel => {
   * console.log(channel.name);
   * });
   */
  public async getChannel(id: string) {
    // Make sure all arguments are provided
    if (!id) {
      throw new Error('Channel id is required');
    }

    let data: RawChannel;

    // Check if the channel is cached
    if (cache.has('channel_' + id)) {
      data = (await cache.get('channel_' + id)) as RawChannel;
    }

    // If it's not cached, fetch it
    else {
      data = await this.fetch(`${this.baseUrl}/channels/${id}`, {
        method: 'GET',
        headers: this.headers,
      }).then(data => {
        if (data.status === 403) {
          throw new Error('Invalid API key (Unauthorized)');
        }

        if (data.status !== 200) {
          throw new Error(data.statusText);
        }
        const dataJson = data.json();

        // Cache the data
        cache.set('channel_' + id, dataJson);

        return dataJson;
      });
    }

    return new Channel(data);
  }

  /**
   * Get a video by id
   * @param id The id of the video
   * @param options Options for the video
   * @see {VideoSearchOptions}
   * @returns {Promise<Video>}
   * @example
   * ```javascript
   * holodex.getVideo('5d7f8b8c-b9b1-4b5b-b8e2-f8f8b8b8b8b8', {
   *  comments: true,
   * }).then(video => {
   * console.log(video.title);
   * });
   * ```
   */
  public async getVideo(id: string, options: VideoSearchOptions) {
    // Make sure all arguments are provided
    if (!id) {
      throw new Error('id is required');
    }

    // Make sure all arguments are provided
    if (!options) {
      throw new Error('options is required');
    }

    const comments = options.comments === true ? 1 : 0;
    const optionsToJson = JSON.parse(JSON.stringify(options));
    delete optionsToJson.comments;
    optionsToJson.c = comments;

    // eslint-disable-next-line node/no-unsupported-features/node-builtins
    const query = new URLSearchParams(optionsToJson).toString();

    let data: RawVideo;

    // Check if the channel is cached
    if (cache.has('video_' + id)) {
      data = (await cache.get('video_' + id)) as RawVideo;
    }

    // If it's not cached, fetch it
    else {
      data = await this.fetch(`${this.baseUrl}/videos/${id}?${query}`, {
        method: 'GET',
        headers: this.headers,
      }).then(data => {
        if (data.status === 403) {
          throw new Error('Invalid API key (Unauthorized)');
        }

        if (data.status !== 200) {
          throw new Error(data.statusText);
        }

        const dataJson = data.json();

        // Cache the data
        cache.set('video_' + id, dataJson);

        return dataJson;
      });
    }

    return new Video(data);
  }

  /**
   * Get multiple video from filters
   * @param options Options for the video
   * @see {MultiVideoSearchOptions}
   * @returns {Promise<VideoMin[]>}
   * @example
   * ```javascript
   * holodex.getVideos({
   *   type: 'clip',
   *   topicId: 'minecraft',
   *   limit: 10,
   * }).then(videos => {
   * console.log(videos[0].title);
   * });
   * ```
   */
  public async getVideos(options: MultiVideoSearchOptions) {
    // Make sure all arguments are provided
    if (!options) {
      throw new Error('options is required');
    }

    const optionsToJson = JSON.parse(JSON.stringify(options));

    // It gets a bit weird here, but we need to do this to get the query string
    // to work properly
    // Getting the keys of the inclide object, the seperating it by a comma
    // so the API will accept it
    optionsToJson.include = optionsToJson.include.join(',');

    //! Honestly, I'm not sure if this soution will work,
    //! I'm going to try it and see if it works later
    //EDIT: I tried it and it seems to work
    // eslint-disable-next-line node/no-unsupported-features/node-builtins
    const query = new URLSearchParams(optionsToJson).toString();

    let data: RawVideoMin[];

    // Check if the channel is cached
    if (cache.has('videos_' + query)) {
      data = (await cache.get('videos_' + query)) as RawVideoMin[];
    }

    // If it's not cached, fetch it
    else {
      data = await this.fetch(`${this.baseUrl}/videos?${query}`, {
        method: 'GET',
        headers: this.headers,
      }).then(data => {
        if (data.status === 403) {
          throw new Error('Invalid API key (Unauthorized)');
        }

        if (data.status !== 200) {
          throw new Error(data.statusText);
        }

        const dataJson = data.json();

        // Cache the data
        cache.set('videos_' + query, dataJson);

        return dataJson;
      });
    }

    const mappedData = data.map((video: RawVideoMin) => new VideoMin(video));
    return mappedData;
  }
}
