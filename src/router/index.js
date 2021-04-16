import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import CreatePost from "../views/CreatePost.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
    meta: {
      requiresAuth: false,
      requiresVisitor: true,
    }
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      requiresAuth: true,
      requiresVisitor: false,
    }
  },
  {
    path: "/post/create",
    name: "create-post",
    component: CreatePost,
    meta: {
      requiresAuth: true,
      requiresVisitor: false,
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isLoggedIn) {
      next({
        path: '/',
      });
    } else {
      next();
    }
  } else if(to.matched.some(record => record.meta.requiresVisitor)) {
    // this route requires guest, check if not logged in
    // if logged, redirect to home page.
    if (store.getters.isLoggedIn) {
      next({
        path: '/home',
      });
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router;
