import * as React from 'react'
import { defineConfig } from '@umijs/max';

export default defineConfig({
	npmClient: 'pnpm',
	model: {},
  qiankun: {
    master: {
			sandbox: true
		},
  },
	routes: [
		{
			path: "/home",
			component: "home",
			layout: false
		},
		{
			path: '/',
			component: "@/layouts/index",
			layout: false,
			routes: [
				{
					path: '/work-branch',
					component: "work-branch"
				}
			]
		},
		// 配置 app2 关联的路由
		{
			path: '/editor/*',
			layout: false,
			microApp: 'editor',
      microAppProps: {
        autoCaptureError: true,
        autoSetLoading: true,
      },
		},
	]
});

