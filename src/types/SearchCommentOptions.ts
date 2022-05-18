export interface SearchCommentOptions {
  /**
   * What to sort the comments by
   * @default 'newest'
   */
  sort?: 'oldest' | 'newest';

  /**
   * If set, will filter clips to only show clips with these langs + all vtuber streams (provided target is not set to filter out streams)
   */
  langs?: string[];

  /**
   * The types of videos to get comments from
   */
  target?: 'clip' | 'stream';

  /**
   * Get comments containing this string
   * Not case sensitive
   */
  comment?: string;

  /**
   * return videos that match one of the provided topics
   */
  topics?: string[];

  /**
   * Videos with all of the specified channel ids. If two or more channel IDs are specified, will only return their collabs, or if one channel is a clipper, it will only show clips of the other vtubers made by this clipper.
   */
  channels?: string[];

  /**
   * Only return video by a certain org
   */
  org?: string;

  /**
   * Paginate the results
   */
  paginated?: boolean;

  /**
   * How much to offset the results by
   * @default 0
   */
  offset?: number;

  /**
   * max ammount of results to return
   */
  limit?: number;
}
