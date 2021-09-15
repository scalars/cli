module.exports = {
    testTimeout: 540000,
    verbose: true,
    roots: [ './src' ],
    preset: 'ts-jest',
    testEnvironment: 'node',
    testResultsProcessor: "jest-sonar-reporter",
    transform: {
        '^.+\\.ts$': 'ts-jest'
    },
};
