import { defineConfig } from 'umi';

export default defineConfig({
  // base: '',
  // publicPath: '',
  hash: true,
  history: {
    type: 'hash',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      menu: {
        // 兼容此写法
        name: 'todo list',
        icon: 'smile',
      },
    },
    {
      path: '/normalList',
      component: '@/pages/normalList',
      menu: {
        // 兼容此写法
        name: '寻常列表',
        icon: 'smile',
      },
    },
  ],
  fastRefresh: {},
  layout: {},
});
