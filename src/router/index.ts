import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import Home from 'pages/Home.vue';

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
    }
  ]
});

export default router;