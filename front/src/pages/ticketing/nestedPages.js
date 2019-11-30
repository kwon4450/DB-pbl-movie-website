let pages = [
  {
    exact: true,
    path: "/time-table",
    isPublic: true,
    component: require("./TimeTable").default
  },
  {
    exact: true,
    path: "/fast",
    isPublic: true,
    component: require("./Fast").default
  },
  {
    exact: true,
    path: "/reserve",
    isPublic: true,
    component: require("./Reserve").default
  }
];

export default pages;
