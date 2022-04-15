import fetch from 'node-fetch';
import {Channel} from './src/types/Channel';
import {HolodexApiOptions} from './src/types/HolodexApiOptions';

/**
 * A class representing the holodex api
 */
export default class holodex {
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
}
