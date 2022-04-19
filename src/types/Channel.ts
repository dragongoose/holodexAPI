import {ChannelType, ChannelStats} from './parts';
import {RawChannel} from './raw';

/**
 * Class which represents a channel.
 */
export class Channel {
  #rawData: RawChannel;

  constructor(rawData: RawChannel) {
    this.#rawData = rawData;
  }

  /**
   * The id of the channel
   */
  public get id() {
    return this.#rawData.id;
  }

  /**
   * The name of the channel
   * @readonly
   */
  public get name() {
    return this.#rawData.name;
  }

  /**
   * The name of the channel in english
   * @readonly
   */
  public get englishName() {
    return this.#rawData.english_name;
  }

  /**
   * The description of the channel
   * @readonly
   */
  public get description() {
    return this.#rawData.description;
  }

  /**
   * A photo of the VTuber
   * @readonly
   */
  public get photo() {
    return this.#rawData.photo;
  }

  /**
   * Thumbnail of the VTuber
   * @readonly
   */
  public get thumbnail() {
    return this.#rawData.thumbnail;
  }

  /**
   * The banner of the channel
   * @readonly
   */
  public get banner() {
    return this.#rawData.banner;
  }

  /**
   * The the org the channel is with
   * @readonly
   */
  public get org() {
    return this.#rawData.org;
  }

  /**
   * The the suborg the channel is with
   * @readonly
   */
  public get suborg() {
    return this.#rawData.suborg;
  }

  /**
   * The language the channel speaks
   * @readonly
   */
  public get lang() {
    return this.#rawData.lang;
  }

  /**
   * Date of when the channel was created
   * @readonly
   */
  public get publishedAt() {
    return this.#rawData.published_at;
  }

  /**
   * The stats of the channel
   * @readonly
   * @see ChannelStats
   * Example:
   * ```json
   * {
   *   videoCount: number,
   *   viewCount: number,
   *   subscriberCount: number,
   *   clipCount: number,
   * }
   * ```
   */
  public get stats(): ChannelStats {
    const stats: ChannelStats = {
      videoCount: this.#rawData.video_count,
      viewCount: this.#rawData.view_count,
      subscriberCount: this.#rawData.subscriber_count,
      clipCount: this.#rawData.clip_count,
    };
    return stats;
  }

  /**
   * The last time the channel's comments were crawled
   * @readonly
   */
  public get commentCrawledAt() {
    return this.#rawData.comments_crawled_at;
  }

  /**
   * Last time channel was updated
   * @readonly
   */
  public get updatedAt() {
    return this.#rawData.updated_at;
  }

  /**
   * The ID the channel uploads under
   * @readonly
   */
  public get ytUploadsId() {
    return this.#rawData.yt_uploads_id;
  }

  /**
   * The last time the channel was crawled
   * @readonly
   */
  public get crawledAt() {
    return this.#rawData.crawled_at;
  }

  /**
   * The type of the channel
   * @readonly
   */
  public get type(): ChannelType {
    return this.#rawData.type;
  }

  /**
   * The twitter handle of the channel
   * @readonly
   */
  public get twitter() {
    return this.#rawData.twitter;
  }

  /**
   * if the channel is inactive or not
   * @readonly
   */
  public get isInactive() {
    return this.#rawData.inactive;
  }

  /**
   * When the channel was created
   * @readonly
   */
  public get createdAt() {
    return this.#rawData.created_at;
  }

  /**
   * The topics the channel is best known for
   * @readonly
   */
  public get topTopics() {
    return this.#rawData.top_topics;
  }
}
