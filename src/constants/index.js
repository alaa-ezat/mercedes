import {

  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,

} from "../utils";

// In your constants file
export const navLists = [
  { name: "Vehicles", path: "/vehicles" },
  { name: "Support", path: "/support" },
];


export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "The widest widescreen. Zero layers deep. ",
      " Multiple screens unify under a 56-inch span of high-tech glass.",
    ],
    video: highlightFirstVideo,
    videoDuration: 8,
  },
  {
    id: 2,
    textLists: [
      "Taut lines, open spaces.",
      "Advanced power electrifies truly modern style,.",
    ],
    video: highlightSecondVideo,
    videoDuration: 13,
  },
  {
    id: 3,
    textLists: ["Pure ambience, purified atmosphere."],
    video: highlightThirdVideo,
    videoDuration: 10.4,
  },
  {
    id: 4,
    textLists: [
      "First class for the second row.",
      "The Executive Rear Seat Package Plus indulges the rear",
      "cabin with massaging seats and neck warmers",
    ],
    video: highlightFourthVideo,
    videoDuration: 8.1,
  },
];

export const models = [
  {
    id: 1,
    title: "Mersedes-Benz SL63 AMG",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
  },
  {
    id: 2,
    title: "Mersedes-Benz SL63 AMG in Blue",
    color: ["#53596E", "#6395ff", "#21242e"],
  },
  {
    id: 3,
    title: "Mersedes-Benz SL63 AMG in White",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
  },
  {
    id: 4,
    title: "Mersedes-Benz SL63 AMG in Gray",
    color: ["#454749", "#3b3b3b", "#181819"],
  },
];






export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];
