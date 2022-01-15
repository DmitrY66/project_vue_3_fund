import Main from '@/pages/Main';
import PostsPage from '@/pages/PostsPage';
import About from '@/pages/About';
import PostsIdPage from '@/pages/PostsIdPage';
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/posts',
    component: PostsPage,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/posts/:id',
    component: PostsIdPage,
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;
