import { defineConfig } from 'rollup';
import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import path from 'path';

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
    postcss({
      // if extract: false (Default -> then styles added to head tag)
      // extract: true, // extracts file to an external stylesheet
      extract: path.resolve('public/build/main.css'), // customize the name of external stylesheet
      //     plugins: [],
    }),

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
