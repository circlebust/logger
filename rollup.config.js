

import * as path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript';

const __root = path.parse(process.argv[1]).dir;
export default [
  {
    context: __root,
    input: `./src/main.ts`,
    output: {
      file: `./dist/main.js`,
      name: 'main', 
      format: 'cjs', 
      sourcemaps: true // IMPORTANT!
    },
    plugins: [
      sourcemaps(),
      typescript(),
      resolve(),
    ],
    watch: {      
      include: './src/**',
      exclude: './node_modules/**',
      clearScreen: true,
      chokidar: true,
    }
  }
];