import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ThemeEditor from "../views/ThemeEditor.vue";
import NavItem from "@/classes/AppRoot/navItem";
import TreeDemo from "@/views/TreeDemo.vue";

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
  },
  {
    path: "/theme-editor",
    name: "Theme Editor",
    component: ThemeEditor,
    icon: "mdi-palette"
  },
  {
    path: "/trees",
    name: "Trees",
    component: TreeDemo,
    icon: "mdi-file-tree"
  }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

export default router;
