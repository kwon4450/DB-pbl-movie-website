let pages = [
  {
    exact: true,
    path: '/',
    component: require('./Home').default
  },
  {
    exact:true,
    path:'/login',
    component:require('./Auth').default
  },
  {
    exact:true,
    path:'/movies',
    component:require('./Movies').default
  },
  {
    exact:true,
    path:'/ticketing',
    component:require('./Ticketing').default
  },
  {
    exact:true,
    path:'/theater',
    component:require('./Theater').default
  },
  {
    exact:true,
    path:'/test',
    component:require('./Test').default
  },
  {
    component:require('./NoMatch').default
  }
];

export default pages;