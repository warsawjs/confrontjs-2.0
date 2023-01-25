export interface TalkDetails {
  id: string | number;
  date: string;
  timeFrom: string;
  timeTo: string;
  title: string;
  author: string;
}

export type Track = "one" | "two";
