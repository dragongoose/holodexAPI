/*
EXAMPLE RESPONSE
{
  "id": "UCoSrY_IQQVpmIRZ9Xf-y93g",
  "name": "Gawr Gura Ch. hololive-EN",
  "english_name": "Gawr Gura",
  "description": "A descendant of the Lost City of Atlantis, who swam to Earth while saying, \"It's so boring down there LOLOLOL!\" She bought her clothes (and her shark hat) in the human world and she really loves them. In her spare time, she enjoys talking to marine life.\n\nFor Inquiries\nCover Corp: http://cover-corp.com/\nOfficial Twitter: https://twitter.com/hololive_En",
  "photo": "https://yt3.ggpht.com/uMUat6yJL2_Sk6Wg2-yn0fSIqUr_D6aKVNVoWbgeZ8N-edT5QJAusk4PI8nmPgT_DxFDTyl8=s800-c-k-c0x00ffffff-no-rj",
  "thumbnail": "https://yt3.ggpht.com/uMUat6yJL2_Sk6Wg2-yn0fSIqUr_D6aKVNVoWbgeZ8N-edT5QJAusk4PI8nmPgT_DxFDTyl8=s88-c-k-c0x00ffffff-no-rj",
  "banner": "https://yt3.ggpht.com/t3xRK7KKzsSyranE0V5Jq_WQ2IGpjITuVNEYoxd9UW-JCEs8uQDsk2rK9z_z_6JzSohm7e1L",
  "org": "Hololive",
  "suborg": "h English (Myth)",
  "lang": null,
  "published_at": "2020-07-16T06:25:20.801Z",
  "view_count": "261536887",
  "video_count": "328",
  "subscriber_count": "3920000",
  "comments_crawled_at": "2022-04-15T14:16:40.606Z",
  "updated_at": "2022-04-15T16:20:07.613Z",
  "yt_uploads_id": "UUoSrY_IQQVpmIRZ9Xf-y93g",
  "crawled_at": "2022-04-15T16:14:10.005Z",
  "type": "vtuber",
  "clip_count": 11889,
  "twitter": "gawrgura",
  "inactive": false,
  "created_at": "2021-04-23T07:21:00.045Z",
  "top_topics": [
    "minecraft",
    "membersonly",
    "dbd"
  ]
}
 */

import {ChannelType} from '../parts/ChannelType';

/**
 * The raw response from the API
 */
export interface RawChannel {
  id: string;
  name: string;
  english_name?: string;
  description: string;
  photo?: string;
  thumbnail?: string;
  banner?: string;
  org?: string;
  suborg?: string;
  lang?: string;
  published_at: Date;
  view_count: number;
  video_count: number;
  subscriber_count: number;
  comments_crawled_at: Date;
  updated_at: Date;
  yt_uploads_id: string;
  crawled_at: Date;
  type: ChannelType;
  clip_count: number;
  twitter: string;
  inactive: boolean;
  created_at: Date;
  top_topics: string[];
}
