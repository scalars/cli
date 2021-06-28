import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

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
                format: 'es'
            },
        ],
        plugins: [typescript()]
    },
    {
        input: './dist/dts/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'es' }],
        plugins: [dts()]
    }
]
