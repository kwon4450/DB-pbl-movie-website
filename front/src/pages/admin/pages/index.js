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
  },
  {
    exact: false,
    path: "/theater",
    isPublic: true,
    component: require("./TheaterUpload").default
  }
];

export default pages;
