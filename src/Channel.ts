import {ChannelType} from './types/Channel';

export class Channel {
  public channelData: ChannelType;

  constructor(channelData: ChannelType) {
    this.channelData = channelData;
  }

  /**
   * The id of the channel
   */
  public get id() {
    return this.channelData.id;
  }

  /**
   * The name of the channel
   */
  public get name() {
    return this.channelData.name;
  }

  /**
   * The name of the channel in english
   */
  public get englishName() {
    return this.channelData.name;
  }

  /**
   * The type of the channel
   */
  public get type() {
    return this.channelData.type;
  }

  /**
   * The the org the channel is with
   */
  public get org() {
    return this.channelData.org;
  }

  /**
   * @property {String} suborg The the suborg the channel is with
   * @default null
   */
  public get suborg() {
    return this.channelData.suborg;
  }

  /**
   * @property {String} photo A photo of the VTuber
   * @default null
   */
  public get photo() {
    return this.channelData.photo;
  }

  /**
   * @property {String} banner The banner of the channel
   * @default null
   */
  public get banner() {
    return this.channelData.banner;
  }

  /**
   * @property {String} twitter The twitter handle of the channel
   * @default null
   */
  public get twitter() {
    return this.channelData.twitter;
  }

  /**
   * @property {String} videoCount The number of videos the channel has
   * @default null
   */
  public get videoCount() {
    return this.channelData.videoCount;
  }

  /**
   * @property {String} viewCount The number of views the channel has
   * @default null
   */
  public get viewCount() {
    return this.channelData.viewCount;
  }

  /**
   * @property {String} subscriberCount The number of subscribers the channel has
   * @default null
   */
  public get subscriberCount() {
    return this.channelData.subscriberCount;
  }


  /**
   * @property {String} clipCount The number of clips the channel has
   * @default null
   */


  /**
   * @property {String} lang The language the channel speaks
   * @default null
   */


  /**
   * @property {Boolean} isInactive if the channel is inactive or not
   */


  /**
   * @property {String} description The description of the channel
   */
  

  /**
   * @property {String} publishedAt Date of when the channel was created
   */
  
}
