import { defineConfig } from 'rollup';
import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import babel from '@rollup/plugin-babel';

const production = !process.env.ROLLUP_WATCH;

export default defineConfig({
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js',
  },
  plugins: [
    svelte({
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !production,
      },
    }),
    // we'll extract any component CSS out into
    // a separate file - better for performance
    css({ output: 'bundle.css' }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ['svelte'], // imports uncompiled version of imported packages, to reuse common code
    }),
    commonjs(), // converts imports using common js to ES modules
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.mjs', '.html', '.svelte'],
      exclude: ['node_modules/@babel/**', 'node_modules/core-js/**'],
    }),

    //   // In dev mode, call `npm run start` once
    //   // the bundle has been generated
    //   !production && serve(),

    //   // Watch the `public` directory and refresh the
    //   // browser on changes when not in production
    // !production && livereload('public'),

    //   // If we're building for production (npm run build
    //   // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
});
