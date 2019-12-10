let pages = [
  {
    exact: true,
    path: "/",
    isPublic: true,
    component: require("./Home").default
  },
  {
    exact: false,
    path: "/user",
    isPublic: true,
    component: require("./user").default
  },
  {
    exact: false,
    path: "/movies",
    isPublic: true,
    component: require("./movies/").default
  },
  {
    exact: false,
    path: "/ticketing",
    isPublic: true,
    component: require("./ticketing/").default
  },
  {
    exact: true,
    path: "/theater",
    isPublic: true,
    component: require("./Theater").default
  },
<<<<<<< HEAD
  // {
  //   exact: false,
  //   path: "/test",
  //   isPublic: true,
  //   component: require("./Test").default
  // },
=======
  {
    exact: false,
    path: "/admin",
    isPublic: true,
    component: require("./admin").default
  },
  {
    exact: false,
    path: "/test",
    isPublic: true,
    component: require("./Test").default
  },
>>>>>>> 9f85c6233fbc13dc96a68684c2e67248f2923838
  {
    isPublic: true,
    component: require("./NoMatch").default
  }
  // selectSeat, myPage 등
  // if isPublic: false, it may have redirectTo item
];

export default pages;
