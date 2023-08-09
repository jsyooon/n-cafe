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

export interface FeedItem {
  id: number;
  isMine: boolean;
  images: FeedImageList;
  createdAt: string;
  updatedAt: string;
  writer: WriterType;
}

export interface FeedPreviewItem extends FeedItem {
  summary: string;
}

export type FeedPreviewList = Array<FeedPreviewItem>;
