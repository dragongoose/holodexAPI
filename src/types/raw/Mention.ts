import {ChannelType} from '../parts/ChannelType';

/**
 * A class that represents a shorter channel
 */
export interface RawMention {
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
}
