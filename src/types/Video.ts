import {VideoStatus, VideoType} from './parts';
import {ChannelMin} from './raw';
import {RawVideo} from './raw';
import {Mention} from './Mention';
import {Clip, Comment, Recommendation} from './';

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

  /**
   * Clips of the video
   * @readonly
   * @type {Clip[]}
   * @example
   * [
   *  {
   *   "id": "6J6y9GkArEs",
   *   "lang": "en",
   *   "type": "clip",
   *   "title": "Gura can't stop laughing at the chaos Fauna and Mumei are making",
   *   "status": "past",
   *   "channel": {
   *     "id": "UCWrHUQo0T5lot1etA1gBMpA",
   *     "name": "SlackFunday Ch.",
   *     "photo": "https://yt3.ggpht.com/xFZwzyxKE6aZChNIFVgSPlPeCE37TIVxivFfkrcucLWcqKcAFnIKObDez-xKujvEdnypuopcIQ=s800-c-k-c0x00ffffff-no-rj"
   *   },
   *   "duration": 174,
   *   "available_at": "2022-04-16T17:59:35+00:00"
   *  },
   * ]
   * @see Clip
   */
  public get clips() {
    const vidClips = this.#rawData.clips.map(memory => new Clip(memory));

    return vidClips;
  }

  /**
   * Other channels that the video mentions
   * @readonly
   * @type {Mention[]}
   * @example
   * [
   *  {
   *   "id": "UCO_aKKYxn4tvrqPjcTzZ6EQ",
   *   "org": "Hololive",
   *   "lang": null,
   *   "name": "Ceres Fauna Ch. hololive-EN",
   *   "type": "vtuber",
   *    "photo": "https://yt3.ggpht.com/cBtserkb211p6If2OewgWd8oriIKRkfwTcP4_Vdq2YETG5TK9Q02v4cYmnLU03KBAJ0gcDha7oQ=s800-c-k-c0x00ffffff-no-rj",
   *    "english_name": "Ceres Fauna"
   *  },
   * ]
   * @see {Mention}
   */
  public get mentions() {
    const vidMentions = this.#rawData.mentions.map(
      memory => new Mention(memory)
    );

    return vidMentions;
  }

  /**
   * The comments on the video
   * @readonly
   * @type {Comment[]}
   * @example
   * [
   *  {
   *   "comment_key": "UgxJG8mCVkV9tMLyu3t4AaABAg",
   *   "message": "2:53:22😂😂😂, love this part!"
   *  },
   * ]
   * @see {Comment}
   */
  public get comments() {
    console.log(this.#rawData);
    if (!this.#rawData.comments || this.#rawData.comments.length === 0) {
      return [];
    }

    const vidComments = this.#rawData.comments.map(
      memory => new Comment(memory)
    );

    return vidComments;
  }

  public get recommendations(): Recommendation[] {
    const vidRecomendations = this.#rawData.recommendations.map(memory => {
      return new Recommendation(memory);
    });

    return vidRecomendations;
  }

  public get channel(): ChannelMin {
    return this.#rawData.channel;
  }
}
