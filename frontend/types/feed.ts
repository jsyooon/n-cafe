export interface FeedPayloadType {
  content: string;
  images?: FeedImageList;
}
export interface FeedImage {
  url: string;
  width?: number;
  height?: number;
}

export type FeedImageList = Array<FeedImage>;

export interface WriterType {
  id: number;
  name: string;
  profileImage: string;
}

export interface FeedItemCommon {
  id: number;
  isMine: boolean;
  createdAt: string;
  updatedAt: string;
  images?: FeedImageList;
  writer: WriterType;
  reactions: {
    comments: number;
  };
}

export interface FeedItem extends FeedItemCommon {
  content: string;
}

export interface FeedPreviewItem extends FeedItemCommon {
  summary: string;
  recentComment: Array<CommentItem>;
}

export interface CommentItem extends Pick<FeedItem, 'id' | 'createdAt' | 'updatedAt' | 'images' | 'writer' | 'content'> {}

export type FeedPreviewList = Array<FeedPreviewItem>;
