module.exports = {
    testTimeout: 540000,
    verbose: true,
    roots: [ './src' ],
    preset: 'ts-jest',
    testEnvironment: 'node',
    testResultsProcessor: "jest-sonar-reporter",
    // testMatch: [
    //     `src/__tests__/**/*.+(spec|test).+(ts|js)`
    // ],
    transform: {
        '^.+\\.ts$': 'ts-jest'
    },
};
