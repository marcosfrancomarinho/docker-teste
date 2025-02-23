const { build } = require('esbuild');

build({
	entryPoints: ['./src/app.ts'],
	outfile: 'dist/bundle.js',
	external: ['express'],
	bundle: true,
	minify: true,
	target: ['ES6'],
})
