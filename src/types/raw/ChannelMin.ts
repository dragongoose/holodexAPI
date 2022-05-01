import {ChannelType} from '../parts';

/**
 * A class that represents a shorter channel
 */
export interface RawChannelMin {
  /**
   * The id of the channel
   */
  id: string;

  /**
   * The org the channel is with
   */
  org: string;
  /**
   * Language of channel
   */
  lang?: string;

  /**
   * The name of the channel
   */
  name: string;

  /**
   * the type of the channel
   * @see {ChannelType}
   */
  type: ChannelType;
  /**
   * The photo of the channel
   */
  photo?: string;

  /**
   * The name of the channel in english
   * @readonly
   * @type {string}
   */
  english_name: string;

  /**
   * The view count of the channel
   * This is only visible when using
   * the `videos` endpoint with includes
   */
  view_count?: number;

  /**
   * The subscriber count of the channel
   * This is only visible when using
   * the `videos` endpoint with includes
   */
  subscriber_count?: number;

  /**
   * The video count of the channel
   * This is only visible when using
   * the `videos` endpoint with includes
   */
  video_count?: number;

  /**
   * The clip count of the channel
   * This is only visible when using
   * the `videos` endpoint with includes
   */
  clip_count?: number;
}
