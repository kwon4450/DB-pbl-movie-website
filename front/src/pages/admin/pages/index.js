let pages = [
  {
    exact: true,
    path: "/",
    isPublic: true,
    component: require("./AdminHome").default
  },
  {
    exact: false,
    path: "/timetable",
    isPublic: true,
    component: require("./TimeTableUpload").default
  }
];

export default pages;
