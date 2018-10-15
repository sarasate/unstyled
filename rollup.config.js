import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/unstyled.cjs.js',
    format: 'cjs',
  },
  external: ['react', 'prop-types', 'styled-components', 'styled-normalize'],
  plugins: [
    nodeResolve(),
    commonjs({
      // ignoreGlobal: true,
      include: 'node_modules/**',
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
  ],
}
