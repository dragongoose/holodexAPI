import {VideoStatus, VideoType} from './parts';
import {ChannelMin, RawVideoMin} from './raw';

export class VideoMin {
  #rawData: RawVideoMin;

  constructor(rawData: RawVideoMin) {
    this.#rawData = rawData;
  }

  /**
   * The ID of the video that is recommended
   * @readonly
   * @type {string}
   * @example
   * _faOZ1ZOZ2c
   * @see {Video#id}
   */
  public get id() {
    return this.#rawData.id;
  }

  /**
   * The title of the recommended video
   * @readonly
   * @type {string}
   * @example
   * "【Hololive】おはようございます！"
   * @see {Video#title}
   */
  public get title() {
    return this.#rawData.title;
  }

  /**
   * The type of the recommended video
   * @readonly
   * @see {VideoType}
   * @type {VideoType}
   * @example
   * "clip"
   */
  public get type(): VideoType {
    return this.#rawData.type;
  }

  /**
   * The topic id of the recommended video
   * Corresponds to a Topic ID, Videos of type clip cannot not have topic. Streams may or may not have topic.
   * @readonly
   * @type {string}
   * @see {Video#topicId}
   * @example
   * "minecraft"
   */
  public get topicId() {
    if (!this.#rawData.topic_id) {
      return 'none';
    }

    return this.#rawData.topic_id;
  }

  /**
   * When the recommended video was published
   * @readonly
   * @type {string}
   * @example
   * "2019-08-24T14:15:22Z"
   * @see {Video#publishedAt}
   */
  public get publishedAt() {
    return this.#rawData.published_at;
  }

  /**
   * The time the recommended video was marked as visible
   * @readonly
   * @type {string}
   * @example
   * "2019-08-24T14:15:22Z"
   * @see {Video#publishedAt}
   */
  public get availableAt() {
    return this.#rawData.available_at;
  }

  /**
   * The length of the recommended video
   * @readonly
   * @type {number}
   * @see {Video#duration}
   * @example
   * "1234"
   */
  public get duration() {
    return this.#rawData.duration;
  }

  /**
   * The status of the recommended video
   * @readonly
   * @type {VideoStatus}
   * @see {VideoStatus}
   * @example
   * "past"
   */
  public get status(): VideoStatus {
    return this.#rawData.status;
  }

  /**
   * the count of people translating the video
   * @readonly
   * @type {number}
   * @example
   * "1234"
   */
  public get liveTlCount() {
    return this.#rawData.live_tl_count;
  }

  /**
   * The channel of the recommended video
   * @readonly
   * @type {ChannelMin}
   * @see {ChannelMin}
   */
  public get channelId(): ChannelMin {
    return this.#rawData.channel;
  }
}
