import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NavItem from "@/classes/AppRoot/navItem";

Vue.use(VueRouter);

const routes: Array<NavItem> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    icon: "mdi-home"
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    icon: "mdi-help"
  }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

export default router;
