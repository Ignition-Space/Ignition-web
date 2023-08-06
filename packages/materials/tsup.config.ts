import { defineConfig } from 'tsup'


export default defineConfig((options) => ({
  minify: !options.watch,
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: false,
  clean: false,
  format: ['cjs', 'esm', 'iife']
}))