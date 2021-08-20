import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import { terser } from 'rollup-plugin-terser'

export default [
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
        external: ['dotenv', 'path', 'yargs', 'inquirer', '@graphql-codegen/cli', 'fs', 'mustache', 'tsc-prog', 'inquirer-fuzzy-path']
    },
    // {
    //     input: './dist/dts/index.d.ts',
    //     output: [{ file: 'dist/index.d.ts', format: 'es' }],
    //     plugins: [dts()]
    // }
]
