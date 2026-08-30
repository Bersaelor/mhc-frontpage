import type { Talk } from "../types/Talk";

// Newest first. The homepage renders these as embeds, the CV as a list.
const talks: Talk[] = [
  {
    videoId: "xA3ZYt5S6iA",
    title: "How server side and mobile Swift can benefit from each other",
    conference: "Server Side Swift",
    conferenceUrl: "https://www.serversideswift.info",
    year: "Berlin 2019",
  },
  {
    videoId: "51PJjrh9yTA",
    title: "How to fit a million stars into an iPhone",
    conference: "Mobius Conf",
    conferenceUrl: "https://mobiusconf.com/en/",
    year: "St. Petersburg 2018",
  },
  {
    videoId: "CwcEjxRtn18",
    title: "Growing trees with recursive enums in Swift",
    conference: "Functional Swift",
    conferenceUrl: "http://2017.funswiftconf.com",
    year: "Brooklyn 2017",
  },
];

export default talks;
