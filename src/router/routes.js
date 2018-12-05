// import Main from '@/components/common'
const loginRoute = {
  path: '/login',
  name: 'login',
  component: resolve => { require(['@/pages/login'], resolve) }
}
export const mainRoutes = [
  // {
  //   path: '/',
  //   name: 'common',
  //   component: Main,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'index',
  //       alias: '/',
  //       component: resolve => { require(['@/pages/index'], resolve) },
  //     },
  //   ]
  // },
]
export const errorRoutes = [
  {
    path: '/404',
    name: '404',
    component: resolve => { require(['@/pages/error/404'], resolve) }
  },
  {
    path: '*',
    redirect: '/404',
  }
]

const routes = [
  loginRoute,
  ...mainRoutes,
  ...errorRoutes
]
export const commonRoutes = [loginRoute, ...errorRoutes]
export default routes
