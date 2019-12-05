let pages = [
  {
    exact: false,
    path: "/time-table",
    isPublic: true,
    component: require("./TimeTable").default
  },
  {
    exact: false,
    path: "/fast",
    isPublic: true,
    component: require("./Fast").default
  },
  {
    exact: false,
    path: "/reserve",
    isPublic: true,
    component: require("./Reserve").default
  },
  {
    exact: true,
    path: "/",
    isPublic: true,
    component: require("./Test").default
  }
];

export default pages;
