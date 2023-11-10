import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/Home.vue')
    }, {
      path: '/Blog',
      component: () => import('../views/Blog.vue')
    }, {
      path: '/About',
      component: () => import('../views/About.vue')
    }, {
      path: '/Website',
      component: () => import('../views/Website.vue')
    }, {
      path: '/Movie',
      component: () => import('../views/Movie.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});
export default router
