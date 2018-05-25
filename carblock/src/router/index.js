import Vue from 'vue';
import Router from 'vue-router';
import index from '@/index/index.vue';
import percenter from '@/percenter/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/percenter',
      name: 'percenter',
      component: percenter
    }
  ]
});
