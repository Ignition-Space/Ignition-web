import * as React from 'react'
import { defineConfig } from '@umijs/max';

export default defineConfig({
	npmClient: 'pnpm',
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
		}
	]
});

