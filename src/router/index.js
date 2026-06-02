import { createRouter, createWebHistory } from "vue-router";
import Home from "../modules/home/pages/Home.vue";
import BookDetail from "../modules/book/pages/BookDetail.vue";
import Map from "../modules/map/pages/Map.vue";
import myBooks from "../modules/book/pages/myBooks.vue";
import MapCreate from "../modules/map/pages/MapCreate.vue"
import MapList from "../modules/map/pages/MapList.vue"

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/book/:id",
    component: BookDetail
  },
  {
    path: "/map/:id",
    component: Map
  },
  {
    path: "/myBooks",
    component: myBooks
  },
  {
    path: "/map/list/create",
    component: MapCreate
  },
  {
    path: "/map/list",
    component: MapList
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;