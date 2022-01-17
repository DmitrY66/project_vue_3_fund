import Main from '@/pages/Main';
import PostsPage from '@/pages/PostsPage';
import PostsPageWithStore from '@/pages/PostsPageWithStore';
import PostsPageCompositionApi from '@/pages/PostsPageCompositionApi';
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
  },
  {
    path: '/store',
    component: PostsPageWithStore,
  },
  {
    path: '/composition',
    component: PostsPageCompositionApi,
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;
