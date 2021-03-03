import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import Home from 'pages/Home.vue';
import SearchList from 'pages/SearchList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/list',
      component: SearchList
    }
  ]
});

export default router;