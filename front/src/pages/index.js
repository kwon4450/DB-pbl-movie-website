let pages = [
  {
    exact: true,
    path: "/",
    isPublic: true,
    component: require("./Home").default
  },
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
    path: "/movies",
    isPublic: true,
    component: require("./Movies").default
  },
  {
    exact: true,
    path: "/ticketing",
    isPublic: true,
    component: require("./Ticketing").default
  },
  {
    exact: true,
    path: "/theater",
    isPublic: true,
    component: require("./Theater").default
  },
  {
    exact: true,
    path: "/test",
    isPublic: true,
    component: require("./Test").default
  },
  {
    isPublic: true,
    component: require("./NoMatch").default
  }
  // selectSeat, myPage 등
  // if isPublic: false, it may have redirectTo item
];

export default pages;
