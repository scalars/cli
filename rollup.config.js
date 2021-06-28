import typescript from '@rollup/plugin-typescript'

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
    }
]
