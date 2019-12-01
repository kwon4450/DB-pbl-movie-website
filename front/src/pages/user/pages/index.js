let pages = [
  {
    exact: true,
    path: "/login",
    isPublic: true,
    component: require("./Auth").default
  },
  {
    exact: true,
    path: "/join",
    isPublic: true,
    component: require("./Join").default
  },
  {
    exact: true,
    path: "/:userID",
    isPublic: true,
    component: require("./MyPage").default
  }
];

export default pages;
