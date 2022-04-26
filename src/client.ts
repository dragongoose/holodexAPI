import fetch from 'node-fetch';
import {
  VideoSearchOptions,
  Channel,
  HolodexApiOptions,
  Video,
  VideoMin,
  RawVideoMin,
} from './types';
import {MultiVideoSearchOptions} from './types/MultiVideoSearchOptions';

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
    const data = await this.fetch(`${this.baseUrl}/channels/${id}`, {
      method: 'GET',
      headers: this.headers,
    }).then(data => {
      if (data.status === 403) {
        throw new Error('Invalid API key (Unauthorized)');
      }

      if (data.status !== 200) {
        throw new Error(data.statusText);
      }

      return data.json();
    });

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
    const comments = options.comments === true ? 1 : 0;
    const optionsToJson = JSON.parse(JSON.stringify(options));
    delete optionsToJson.comments;
    optionsToJson.c = comments;

    // eslint-disable-next-line node/no-unsupported-features/node-builtins
    const query = new URLSearchParams(optionsToJson).toString();

    const data = await this.fetch(`${this.baseUrl}/videos/${id}?${query}`, {
      method: 'GET',
      headers: this.headers,
    }).then(data => {
      if (data.status === 403) {
        throw new Error('Invalid API key (Unauthorized)');
      }

      if (data.status !== 200) {
        throw new Error(data.statusText);
      }

      return data.json();
    });

    return new Video(data);
  }

  public async getVideos(id: string, options: MultiVideoSearchOptions) {
    const optionsToJson = JSON.parse(JSON.stringify(options));

    // It gets a bit weird here, but we need to do this to get the query string
    // to work properly
    // Getting the keys of the inclide object, the seperating it by a comma
    // so the API will accept it
    optionsToJson.include = Object.keys(optionsToJson.include).join(',');

    //! Honestly, I'm not sure if this soution will work,
    //! I'm going to try it and see if it works later
    const query = new URLSearchParams(optionsToJson).toString();
    console.log(query);

    /*
    const data = await this.fetch(`${this.baseUrl}/channels/${id}/videos`, {
      method: 'GET',
      headers: this.headers,
    }).then(data => {
      if (data.status === 403) {
        throw new Error('Invalid API key (Unauthorized)');
      }

      if (data.status !== 200) {
        throw new Error(data.statusText);
      }

      return data.json();
    });

    const mappedData = data.map((video: RawVideoMin) => new VideoMin(video));
    return mappedData;
    */
  }
}
