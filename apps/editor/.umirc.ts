import * as React from 'react'
import { defineConfig } from '@umijs/max';

export default defineConfig({
	npmClient: 'pnpm',
	model: {},
	mfsu: false,
	qiankun:  process.env.BUILD_MODE === "micro" ? {
    slave: {},
  }: undefined,
});

