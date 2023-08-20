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
}

export interface FeedItem extends FeedItemCommon {
  content: string;
}

export interface FeedPreviewItem extends FeedItemCommon {
  summary: string;
}

export type FeedPreviewList = Array<FeedPreviewItem>;
