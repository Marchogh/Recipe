import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/add-recipe",
    name: "AddRecipe",
    component: () =>
      import(/* webpackChunkName: "recipe" */ "../components/AddRecipe.vue")
  },
  {
    path: "/recipe-:id",
    name: "Recipe",
    // route level code-splitting
    // this generates a separate chunk (recipe.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "recipe" */ "../views/Recipe.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
