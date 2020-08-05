import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/lists',
    name: 'Lists',
    component: () => import('../views/Lists.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/dupa',
    name: 'Redirect',
    redirect: to => {
      const { hash, params, query } = to;
      console.log(hash);
      console.log(params);
      console.log(query);
      console.log(to);
      localStorage.setItem("token", params["token"])
      return '/';
    }
  },
  {
    path: '*',
    redirect: '/',
  },
];


const router = new VueRouter({
  mode: 'history',
  routes,
});


router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user') || localStorage.getItem('token');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
});

export default router;
