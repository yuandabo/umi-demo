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
    {
      path: '/charts',
      component: '@/pages/charts',
      menu: {
        // 兼容此写法
        name: '引入echarts看看咯',
        icon: 'smile',
      },
    },
  ],
  fastRefresh: {},
  layout: {},
});
