import { babel } from '@rollup/plugin-babel';

export default {
	input: 'src/index.js',
	output: [
		{ file: 'dist/index.cjs', format: 'cjs', sourcemap: false, strict: false, exports: 'auto' },
		{ file: 'dist/index.mjs', format: 'esm', sourcemap: false, strict: false, exports: 'auto' }
	],
	plugins: [
		babel({
      babelHelpers: 'runtime',
			presets: [
				['@babel/env', { modules: false, targets: { node: 10 } }]
			],
      plugins:['@babel/plugin-transform-runtime']
		},
    )
	]
};
