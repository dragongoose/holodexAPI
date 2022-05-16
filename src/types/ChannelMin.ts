import {ChannelStats, ChannelType} from './parts';
import {RawChannelMin} from './raw';

/**
 * Class which represents a smaller channel.
 */
export class ChannelMin {
  #rawData: RawChannelMin;

  constructor(rawData: RawChannelMin) {
    this.#rawData = rawData;
  }

  /**
   * The ID of the channel
   * @readonly
   * @type {string}
   * @example
   * 'UgzayDBEumfrVGLBTGJ4AaABAg'
   * @see {Channel#id}
   */
  public get id() {
    return this.#rawData.id;
  }

  /**
   * The org of the channel
   * @readonly
   * @type {string}
   */
  public get org() {
    return this.#rawData.org;
  }

  /**
   * The language of the channel
   * @readonly
   * @type {string}
   * @example
   * 'ja'
   */
  public get lang() {
    return this.#rawData.lang;
  }

  /**
   * The name of the channel
   * @readonly
   * @type {string}
   */
  public get name() {
    return this.#rawData.name;
  }

  /**
   * The type of the channel
   * @readonly
   * @type {ChannelType}
   */
  public get type(): ChannelType {
    return this.#rawData.type;
  }

  /**
   * The photo of the channel
   * @readonly
   * @type {string}
   */
  public get photo() {
    return this.#rawData.photo;
  }

  /**
   * The english name of the channel
   *  @readonly
   * @type {string}
   */
  public get englishName() {
    return this.#rawData.english_name;
  }

  /**
   * The stats of the channel
   * @readonly
   * @type {ChannelStats}
   * @see {ChannelStats}
   */
  public get stats(): ChannelStats {
    // Convert the raw data to a ChannelStats object
    // and convert the string values to numbers

    const stats: ChannelStats = {
      videoCount: Number(this.#rawData.video_count),
      viewCount: Number(this.#rawData.view_count),
      subscriberCount: Number(this.#rawData.subscriber_count),
      clipCount: Number(this.#rawData.clip_count),
    };

    return stats;
  }
}
