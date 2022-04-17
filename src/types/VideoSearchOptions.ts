/**
 * Search options for videos.
 */
export interface VideoSearchOptions {
  /**
   * If comments are enabled, the video will be returned with comments.
   */
  comments?: boolean;

  /**
   * The language of the video
   */
  lang?: string;
}
