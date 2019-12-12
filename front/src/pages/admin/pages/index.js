let pages = [
  {
    exact: true,
    path: "/",
    isPublic: false,
    component: require("./AdminHome").default
  },
  {
    exact: false,
    path: "/timetable",
    isPublic: false,
    component: require("./TimeTableUpload").default
  },
  {
    exact: false,
    path: "/theater",
    isPublic: false,
    component: require("./TheaterUpload").default
  },
  {
    exact: false,
    path: "/movie",
    isPublic: false,
    component: require("./MovieUpload").default
  }
];

export default pages;
