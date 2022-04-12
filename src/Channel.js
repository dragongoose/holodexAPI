/**
 * A class representing a youtube channel
 * @param {Object} channelData channel data
 */
class Channel {
  constructor(channelData) {
    /**
     * @property {String} id The id of the channel
     */
    this.id = channelData.id;

    /**
     * @property {String} name The name of the channel
     */
    this.name = channelData.name;

    /**
     * @property {String} englishName The name of the channel in english
     * @default null
     */
    this.englishName = channelData.english_name;

    /**
     * @property {String} type The type of the channel
     */
    this.type = channelData.type;

    /**
     * @property {String} org The the org the channel is with
     * @default null
     */
    this.org = channelData.org;

    /**
     * @property {String} suborg The the suborg the channel is with
     * @default null
     */
    this.suborg = channelData.suborg;

    /**
     * @property {String} photo A photo of the VTuber
     * @default null
     */
    this.photo = channelData.photo;

    /**
     * @property {String} banner The banner of the channel
     * @default null
     */
    this.banner = channelData.banner;

    /**
     * @property {String} twitter The twitter handle of the channel
     * @default null
     */
    this.twitter = channelData.twitter;

    /**
     * @property {String} videoCount The number of videos the channel has
     * @default null
     */
    this.videoCount = channelData.video_count;

    /**
     * @property {String} viewCount The number of views the channel has
     * @default null
     */
    this.viewCount = channelData.view_count;

    /**
     * @property {String} subscriberCount The number of subscribers the channel has
     * @default null
     */
    this.subscriberCount = channelData.subscriber_count;

    /**
     * @property {String} clipCount The number of clips the channel has
     * @default null
     */
    this.clipCount = channelData.clip_count;

    /**
     * @property {String} lang The language the channel speaks
     * @default null
     */
    this.lang = channelData.lang;

    /**
     * @property {Boolean} isInactive if the channel is inactive or not
     */
    this.isInactive = channelData.inactive;

    /**
     * @property {String} description The description of the channel
     */
    this.description = channelData.description;

    /**
     * @property {String} publishedAt Date of when the channel was created
     */
    this.publishedAt = new Date(channelData.published_at);
  }
}

module.exports = Channel;
