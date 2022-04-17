import {VideoStatus} from './parts/VideoStatus';
import {VideoType} from './parts/VideoType';
import {RawVideo} from './raw/Video';
import {Mention} from './Mention';
import {Clip} from './Clip';

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
   * @see {VideoType}
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
   * When the video was published
   * @readonly
   * @type {string}
   * @example
   * "2019-08-24T14:15:22Z"
   */
  public get publishedAt() {
    return this.#rawData.published_at;
  }

  /**
   * When the video was marked as visible
   * @readonly
   * @type {string}
   * @example
   * "2019-08-24T14:15:22Z"
   */
  public get availableAt() {
    return this.#rawData.available_at;
  }

  /**
   * The length of the video in seconds
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
   * The scheduled start of the video
   * @readonly
   * @type {string}
   * @example
   * "2019-08-24T14:15:22Z"
   */
  public get startScheduled() {
    return this.#rawData.start_scheduled;
  }

  /**
   * The time the video actually started
   * @readonly
   * @type {string}
   * @example
   * "2019-08-24T14:15:22Z"
   */
  public get startActual() {
    return this.#rawData.start_actual;
  }

  /**
   * The actual end of the video
   * @readonly
   * @type {string}
   * @example
   * "2019-08-24T14:15:22Z"
   */
  public get endActual() {
    return this.#rawData.end_actual;
  }

  /**
   * The amount of live viewers on the video
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
   * The channel id of the uploader
   * @readonly
   * @type {string}
   */
  public get channelId() {
    return this.#rawData.channel_id;
  }

  public get clips() {
    const vidClips = this.#rawData.clips.map(memory => new Clip(memory));

    return vidClips;
  }

  public get mentions() {
    const vidMentions = this.#rawData.mentions.map(
      memory => new Mention(memory)
    );

    return vidMentions;
  }
}
