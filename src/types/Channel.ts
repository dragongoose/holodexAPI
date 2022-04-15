export interface ChannelType {
  id: string;
  name: string;
  englishName?: string;
  description: string;
  type: 'vtuber' | 'subber';
  org?: string;
  suborg?: string;
  photo?: string;
  thumbnail?: string;
  banner?: string;
  twitter?: string;
  lang?: string;
  inactive: boolean;
  publishedAt: Date;
  createdAt: Date;
  crawledAt: Date;
  updatedAt: Date;
  commentsCrawledAt: Date;
  yt_uploads_id: string;
  topTopics: string[];
}
