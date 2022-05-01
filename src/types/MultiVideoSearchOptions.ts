import {VideoIncludes, VideoStatus, VideoType} from './parts';

export interface MultiVideoSearchOptions {
  /**
   * Filter results by channel id
   */
  channel_id?: string;

  /**
   * Filter results by video id
   */
  id?: string;

  /**
   * Extra info to include
   */
  include?: VideoStatus[];

  /**
   * Filter by language of the video
   */
  lang?: string;

  /**
   * Maximum number of results to return
   */
  limit?: number;

  /**
   * Filter restults by maximum hours it will take for a video to be visible
   * This could be when it is a live stream that hasn't started yet,
   * or when a video is premiering.
   * @default 0
   */
  max_upcomming_hours?: number;

  /**
   * Filter the resultts by a mentioned channel
   */
  mentioned_channel_id?: string;

  /**
   * Offset the results by a certain amount
   */
  offset?: number;

  /**
   * Ascending or Descending sort
   */
  order?: 'asc' | 'desc';

  /**
   * The orginazation the VTuber is in
   */
  org?: string;

  /**
   * Sort the videos by any value in the VideoMin class
   */
  sort?: string;

  /**
   * The status of the video
   */
  status?: VideoStatus;

  /**
   * The topic of video
   * @example
   * "minecraft"
   */
  topic?: string;

  /**
   * The type of video
   * @example
   * "clip"
   * @see VideoType
   */
  type?: VideoType;

  /**
   * Set the minimum for how old a video could be
   */
  from?: Date;

  /**
   * Set the maximum for how old a video could be
   */
  to?: Date;
}
