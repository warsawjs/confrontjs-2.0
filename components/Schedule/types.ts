export interface TalkDetails {
  id: string | number;
  date: string;
  timeFrom: string;
  timeTo: string;
  title: string;
  author: string;
  description: string;
  picture: string;
}

export type LineVariant = "one" | "two";
