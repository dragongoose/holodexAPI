/*
{

  "comment_key": "string",

  "video_id": "string",

  "message": "string"

}
*/

export interface RawComment {
  /**
   * The id of the comment
   */
  comment_key: string;

  /**
   * The id of the video that the comment is on.
   * Could be undefined if the comment is on a clip, so use the clip's ID instead.
   */
  video_id?: string;

  /**
   * The message of the comment
   */
  message: string;
}
