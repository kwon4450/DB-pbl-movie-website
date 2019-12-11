let pages = [
  {
    exact: false,
    path: "/timetable",
    isPublic: true,
    component: require("./TimeTable").default
  },
  // {
  //   exact: false,
  //   path: "/fast",
  //   isPublic: true,
  //   component: require("./Fast").default
  // },
  {
    exact: false,
    path: "/reserve",
    isPublic: false,
    component: require("./Reserve").default
  }
  // {
  //   exact: true,
  //   path: "/",
  //   isPublic: true,
  //   component: require("./Test").default
  // }
];

export default pages;
