import {VideoStatus} from './parts/VideoStatus';
import {VideoType} from './parts/VideoType';
import {RawVideo} from './raw/Video';

export class Video {
  #rawData: RawVideo;

  constructor(rawData: RawVideo) {
    this.#rawData = rawData;
  }

  /**
   * The id of the video
   * @readonly
   * @type {string}
   */
  public get id() {
    return this.#rawData.id;
  }

  /**
   * The title of the video
   * @readonly
   * @type {string}
   */
  public get title() {
    return this.#rawData.title;
  }

  /**
   * The type of the video
   * @readonly
   * @type {VideoType}
   */
  public get type(): VideoType {
    return this.#rawData.type;
  }

  /**
   * The topic id of the video
   * Corresponds to a Topic ID, Videos of type clip cannot not have topic. Streams may or may not have topic.
   * @readonly
   * @type {string}
   */
  public get topicId() {
    return this.#rawData.topic_id;
  }

  /**
   * The published at of the video
   * @readonly
   * @type {string}
   * @example
   * "2019-08-24T14:15:22Z"
   */
  public get publishedAt() {
    return this.#rawData.published_at;
  }

  /**
   * The available at of the video
   * @readonly
   * @type {string}
   * @example
   * "2019-08-24T14:15:22Z"
   */
  public get availableAt() {
    return this.#rawData.available_at;
  }

  /**
   * The duration of the video
   * @readonly
   * @type {number}
   * @example
   * 0
   */
  public get duration() {
    return this.#rawData.duration;
  }

  /**
   * The status of the video
   * @readonly
   * @type {VideoStatus}
   * @example
   * "new"
   * @see VideoStatus
   */
  public get status(): VideoStatus {
    return this.#rawData.status;
  }

  /**
   * The start scheduled of the video
   * @readonly
   * @type {string}
   * @example
   * "2019-08-24T14:15:22Z"
   */
  public get startScheduled() {
    return this.#rawData.start_scheduled;
  }

  /**
   * The start actual of the video
   * @readonly
   * @type {string}
   * @example
   * "2019-08-24T14:15:22Z"
   */
  public get startActual() {
    return this.#rawData.start_actual;
  }

  /**
   * The end actual of the video
   * @readonly
   * @type {string}
   * @example
   * "2019-08-24T14:15:22Z"
   */
  public get endActual() {
    return this.#rawData.end_actual;
  }

  /**
   * The live viewers of the video
   * @readonly
   * @type {number}
   * @example
   * 0
   */
  public get liveViewers() {
    return this.#rawData.live_viewers;
  }

  /**
   * The description of the video
   * @readonly
   * @type {string}
   * @example
   * "string"
   */
  public get description() {
    return this.#rawData.description;
  }

  /**
   * The songcount of the video
   * @readonly
   * @type {number}
   * @example
   * 0
   */
  public get songcount() {
    return this.#rawData.songcount;
  }

  /**
   * The channel id of the video
   * @readonly
   * @type {string}
   */
  public get channelId() {
    return this.#rawData.channel_id;
  }
}
