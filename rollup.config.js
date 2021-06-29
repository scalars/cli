import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
// import nodePolyfills from 'rollup-plugin-node-polyfills'

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/index.js',
                format: 'es'
            }
        ],
        plugins: [typescript()]
    },
    {
        input: 'src/scripts/sync.ts',
        output: [
            {
                file: 'dist/sync.js',
                format: 'commonjs',
                banner: '#!/usr/bin/env node',
                // name: 'sync',
                // globals: {
                //     dotenv: 'dotenv',
                //     path: 'path'
                // }

            },
        ],
        plugins: [typescript()],
        external: ['dotenv', 'path']
    },
    {
        input: './dist/dts/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'es' }],
        plugins: [dts()]
    }
]
