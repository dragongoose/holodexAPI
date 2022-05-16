import {RawChannelMin} from '../types/raw';
import {ChannelType} from '../types/parts';

/**
 * A mention of a channel, which is shorter than a channel. This is used for the mentions in the holodex. Usually found in the video endpoint.
 */
export class Mention {
  #rawData: RawChannelMin;
  constructor(data: RawChannelMin) {
    this.#rawData = data;
  }

  /**
   * The id of the channel
   * @readonly
   * @type {string}
   * @example
   * "1"
   */
  get id() {
    return this.#rawData.id;
  }

  /**
   * The org the channel is with
   * @readonly
   * @type {string}
   * @example
   * "Hololive"
   */
  get org() {
    return this.#rawData.org;
  }

  /**
   * Language of channel
   * @readonly
   * @type {string}
   * @example
   * "ja"
   */
  get lang() {
    return this.#rawData.lang;
  }

  /**
   * The name of the channel
   * @readonly
   * @type {string}
   * @example
   * "Gawr Gura Ch. hololive-EN"
   */
  get name() {
    return this.#rawData.name;
  }

  /**
   * the type of the channel
   * @readonly
   * @see {ChannelType}
   * @type {ChannelType}
   * @example
   * "VTuber"
   */
  get type(): ChannelType {
    return this.#rawData.type;
  }

  /**
   * The photo of the channel
   * @readonly
   * @type {string}
   * @example
   * "https://hololive.tv/img/channel/1.jpg"
   */
  get photo() {
    return this.#rawData.photo;
  }

  /**
   * The english name of the channel
   * @readonly
   * @type {string}
   * @example
   * "Gawr Gura"
   */
  get englishName() {
    return this.#rawData.english_name;
  }
}
