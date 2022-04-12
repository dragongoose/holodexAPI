export interface Channel {
  id: string;
  name: string;
  englishName: string | null;
  description: string;
  type: 'vtuber' | 'subber';
  org: string | null;
  suborg: string | null;
  photo: string | null;
  thumbnail: string | null;
  banner: string | null;
  twitter: string | null;
  lang: string | null;
  inactive: boolean;
  publishedAt: Date;
  createdAt: Date;
  crawledAt: Date;
  updatedAt: Date;
  commentsCrawledAt: Date;
  yt_uploads_id: string;
  topTopics: string[];
}
