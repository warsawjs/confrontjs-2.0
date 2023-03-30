import { Url } from "url";

export type Info = {
  value: string;
  sponsorLink: string;
  days: string;
  lines: string;
  speakers: string;
  lang: string;
  desc: string;
  callForPapers: string;
  heroTitle: string;
  heroDesc: string;
  becomeSponsorDesc: string;
  speakersDescription: string;
  whyDesc: string;
  testimonialsDesc: string;
  previousConferences: string;
  line1Title: string;
  line1Desc: string;
  line2Title: string;
  line2Desc: string;
  mainPageNoASpeaker: string;
  zautomatyzowani?: string;
  warsawjs?: string;
  gamedevjs?: string;
  overment?: string;
  devszczepaniak?: string;
  nofluffjobs?: string;
  comandeer?: string;
  coderslab?: string;
  highlab?: string;
  kmag?: string;
  gaminate?: string;
};

export type VenueData = {
  desc: string;
  about: string;
  parking: string;
  entry: string;
  exit: string;
  img: string;
  img0: string;
};

export type Testimonial = {
  name: string;
  position: string;
  comment: string;
};

export type Speaker = {
  id: string;
  name: string;
  slug: string;
  position: string;
  avatar: string;
  twitter: string;
  facebook: string;
  linkedin: string;
  instagram: string;
  website: string;
  company: string;
  country: string;
  bio: string;
  talkTitle: string;
  talkDescription: string;
  Technologies: string;
  hidden: string;
};

export type StaffMember = {
  id: string;
  name: string;
  title: string;
  picture: string;
  linkedin: string;
  twitter: string;
  facebook: string;
  instagram: string;
};

export type ScheduleEvent = {
  day: Number;
  id: string;
  author: string;
  slug: string;
  title: string;
  date: string;
  timeFrom: string;
  timeTo: string;
  description: string;
  picture: string;
  hidden: string;
};

export type TracksData = {
  trackOne: {
    title: string;
    textContent: string;
    talkList: ScheduleEvent[];
  };
  trackTwo: {
    title: string;
    textContent: string;
    talkList: ScheduleEvent[];
  };
};

type SponsorType = "diamond" | "gold" | "silver";

export type Sponsor = {
  id: string;
  type: SponsorType;
  name: string;
  picture: string;
  url: string;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
};

export type Ticket = {
  type: string;
  title: string;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  feature5: string;
  description: string;
  price: string;
  url: string;
};
