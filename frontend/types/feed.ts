export interface FeedPayloadType {
  content: string;
  images?: Array<string>;
}

export interface FeedImage {
  url: string;
  width: number;
  height: number;
}

export type FeedImageArray = Array<FeedImage>;
