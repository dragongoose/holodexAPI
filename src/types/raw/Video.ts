/*
EXAMPLE RESPONSE
{
  "id": "string",
  "title": "string",
  "type": "stream",
  "topic_id": "minecraft",
  "published_at": "2019-08-24T14:15:22Z",
  "available_at": "2019-08-24T14:15:22Z",
  "duration": 0,
  "status": "new",
  "start_scheduled": "2019-08-24T14:15:22Z",
  "start_actual": "2019-08-24T14:15:22Z",
  "end_actual": "2019-08-24T14:15:22Z",
  "live_viewers": 0,
  "description": "string",
  "songcount": 0,
  "channel_id": "string"
}
*/

import {VideoType} from '../parts/VideoType';
import {VideoStatus} from '../parts/VideoStatus';

export interface RawVideo {
  id: string;
  title: string;
  type: VideoType;
  topic_id?: string;
  published_at: string;
  available_at: string;
  duration: number;
  status: VideoStatus;
  start_scheduled: string;
  start_actual: string;
  end_actual?: string;
  live_viewers?: number;
  description: string;
  songcount: number;
  channel_id: string;
}
