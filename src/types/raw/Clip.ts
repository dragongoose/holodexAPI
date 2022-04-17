/*
    {
      "id": "_faOZ1ZOZ2c",
      "lang": "en",
      "type": "clip",
      "title": "This Is What They Were Up To While Mumei Was AFK....",
      "status": "past",
      "channel": {
        "id": "UCdzwxjm4n5a31K8FG0MQU0g",
        "name": "Alpha.K",
        "photo": "https://yt3.ggpht.com/BJDUaTT2TMWGk0hFUHzER-fDFAjh6CoIQ_IULLmxdBQUSc3Jg_OeFBJIMafrDkVpSHcU4WWhmQ=s800-c-k-c0x00ffffff-no-rj"
      },
      "duration": 86,
      "available_at": "2022-04-16T20:28:56+00:00"
    }
    */

import {VideoStatus} from '../parts/VideoStatus';
import {VideoType} from '../parts/VideoType';

export interface RawClip {
  id: string;
  lang: string;
  type: VideoType;
  title: string;
  status: VideoStatus;
  channel: {id: string; name: string; photo: string};
  duration: number;
  available_at: string;
}
