import {RawComment} from './raw';

export class Comment {
  #rawData;
  constructor(data: RawComment) {
    this.#rawData = data;
  }

  /**
   * The id of the comment
   * @readonly
   * @type {string}
   * @example
   * 'UgzayDBEumfrVGLBTGJ4AaABAg'
   */
  get commentKey() {
    return this.#rawData.comment_key;
  }

  /**
   * The id of the video
   * @readonly
   * @type {string}
   * @example
   * '_faOZ1ZOZ2c'
   * @see {Video#id}
   * @see {Clip#id}
   */
  get videoId() {
    return this.#rawData.video_id;
  }

  /**
   * The comment's content
   * @readonly
   * @type {string}
   * @example
   * 'おはようございます！'
   */
  get message() {
    return this.#rawData.message;
  }
}
