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
    path: "/mypage/:userID",
    isPublic: false,
    component: require("./MyPage").default
  },
  {}
];

export default pages;
