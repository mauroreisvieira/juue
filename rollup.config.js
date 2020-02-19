import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import path from 'path';

const outputConfigs = [
  {
    file: path.resolve('lib/vivaldi.cjs.js'),
    format: 'cjs'
  },
  {
    file: path.resolve('lib/vivaldi.global.js'),
    format: 'iife'
  },
  {
    file: path.resolve('lib/vivaldi.esm.js'),
    format: 'es'
  }
]

export default {
    input: ['src/index.ts'],
    output: outputConfigs,
    plugins: [
      typescript({}),
      resolve({
        mainFields: ['jsnext', 'main', 'browser']
      }),
      commonjs(),
      terser()
    ]
};
