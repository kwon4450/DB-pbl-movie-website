let pages = [
  {
    exact: true,
    path: "/",
    isPublic: true,
    component: require("./MovieHome").default
  },
  {
    exact: false,
    path: "/finder",
    isPublic: true,
    component: require("./Finder").default
  },
  {
    exact: false,
    path: "/detail/:moviename",
    isPublic: true,
    component: require("./Detail").default
  },
  {
    exact: false,
    path: "/review",
    isPublic: true,
    component: require("./Review").default
  }
];

export default pages;
