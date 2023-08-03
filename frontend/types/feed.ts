export interface FeedPayloadType {
  content: string;
  images?: FeedImageArray;
}

export interface FeedImage {
  url: string;
  width?: number;
  height?: number;
}

export type FeedImageArray = Array<FeedImage>;
