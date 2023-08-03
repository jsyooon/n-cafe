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
