import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import { terser } from 'rollup-plugin-terser'
// import peerDepsExternal from 'rollup-plugin-peer-deps-external'
// import resolve from '@rollup/plugin-node-resolve'
// import commonjs from '@rollup/plugin-commonjs'
// import json from '@rollup/plugin-json'

export default [
    // {
    //     input: 'src/index.ts',
    //     output: [
    //         {
    //             file: 'dist/index.js',
    //             format: 'es'
    //         }
    //     ],
    //     // plugins: [typescript(), terser()]
    //     plugins: [typescript()]
    // },
    {
        input: 'src/scripts/sync.ts',
        output: [
            {
                file: 'dist/sync.js',
                format: 'commonjs',
                banner: '#!/usr/bin/env node',
            },
        ],
        plugins: [typescript(), terser()],
        external: ['dotenv', 'path', '@graphql-codegen/cli', 'fs', 'mustache', 'rollup', '@rollup/plugin-typescript', 'rollup-plugin-terser', 'typescript']
    },
    {
        input: './dist/dts/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'es' }],
        plugins: [dts()]
    }
]
// export default [
//     {
//         input: 'dist/index.ts',
//         output: [
//             {
//                 file: 'dist/index.js',
//                 format: 'es'
//             }
//         ],
//         plugins: [typescript()]
//     }
// ]
