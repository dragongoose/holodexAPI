import {VideoType} from './parts';

export interface SearchVideoOptions {
  /**
   * How to search the results
   * @default newest
   */
  sort?: 'oldest' | 'newest';

  /**
   * Languages of video to get
   * @example ['en', 'ja']
   */
  lang?: string[];

  /**
   * The type if videos to get
   * @default all
   * @see {VideoType}
   */
  type?: VideoType;

  /**
   * Return video that are about the given topic
   * @example ['apex', 'singing']
   */
  topic?: string[];

  /**
   * Videos with all of the specified channel ids.
   * If two or more channel IDs are specified, will only return their collabs,
   * or if one channel is a clipper,
   * it will only show clips of the other vtubers made by this clipper.
   */
  vch?: string[];

  /**
   * Return videos only form a certain organization
   * @example ['hololive']
   * @default []
   */
  org?: string[];

  /**
   * Return the results as an array and give a total property.
   * @default false
   * @example true
   */
  paginated?: boolean;

  /**
   * Offset the results
   * @default 0
   * @example 10
   */
  offset?: number;

  /**
   * Limit the results to a certain number
   * @example 20
   */
  limit?: number;
}
