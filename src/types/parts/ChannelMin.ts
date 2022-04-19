/*
  "channel": {
    "id": "UCoSrY_IQQVpmIRZ9Xf-y93g",
    "name": "Gawr Gura Ch. hololive-EN",
    "org": "Hololive",
    "type": "vtuber",
    "photo": "https://yt3.ggpht.com/uMUat6yJL2_Sk6Wg2-yn0fSIqUr_D6aKVNVoWbgeZ8N-edT5QJAusk4PI8nmPgT_DxFDTyl8=s800-c-k-c0x00ffffff-no-rj",
    "english_name": "Gawr Gura",
    "view_count": "261958884",
    "video_count": "328",
    "subscriber_count": "3920000",
    "clip_count": 11902
  },
*/

import {ChannelType} from '../parts/ChannelType';

export interface ChannelMin {
  id: string;
  name: string;
  org: string;
  type: ChannelType;
  photo: string;
  english_name: string;
  view_count: number;
  video_count: number;
  subscriber_count: number;
  clip_count: number;
}
