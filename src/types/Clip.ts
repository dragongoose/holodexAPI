import {RawClip} from './raw';
import {VideoType, VideoStatus} from './parts';

/**
 * Class which represents a clip.
 */
export class Clip {
  #rawData;
  constructor(data: RawClip) {
    this.#rawData = data;
  }

  /**
   * The id of the clip
   * @readonly
   * @type {string}
   * @example
   * _faOZ1ZOZ2c
   */
  get id() {
    return this.#rawData.id;
  }

  /**
   * The langauge of the clip
   * @readonly
   * @type {string}
   * @example
   * "ja"
   */
  get lang() {
    return this.#rawData.lang;
  }

  /**
   * The type of the clip
   * @readonly
   * @see {VideoType}
   * @type {VideoType}
   * @example
   * "clip"
   */
  get type(): VideoType {
    return this.#rawData.type;
  }

  /**
   * The title of the clip
   * @readonly
   * @type {string}
   * @example
   * "【Hololive】おはようございます！"
   */
  get title() {
    return this.#rawData.title;
  }

  /**
   * The status of the clip
   * @readonly
   * @type {VideoStatus}
   * @see {VideoStatus}
   * @example
   * "past"
   */
  get status(): VideoStatus {
    return this.#rawData.status;
  }

  /**
   * The clipper's channel
   * @readonly
   * @type {string}
   * @example
   * "channel": {
   *   "id": "UCdzwxjm4n5a31K8FG0MQU0g",
   *   "name": "Alpha.K",
   *   "photo": "https://yt3.ggpht.com/BJDUaTT2TMWGk0hFUHzER-fDFAjh6CoIQ_IULLmxdBQUSc3Jg_OeFBJIMafrDkVpSHcU4WWhmQ=s800-c-k-c0x00ffffff-no-rj"
   * },
   */
  get channel(): {id: string; name: string; photo: string} {
    return this.#rawData.channel;
  }

  /**
   * The duration of the clip
   * @readonly
   * @type {number}
   * @example
   * 86
   * */
  get duration(): number {
    return this.#rawData.duration;
  }

  /**
   * When the clip became available
   * @readonly
   * @type {string}
   * @example
   * "2022-04-16T20:28:56+00:00"
   * */
  get availableAt(): string {
    return this.#rawData.available_at;
  }
}
