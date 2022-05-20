/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    rootDir: 'src',
    coverageDirectory: '../coverage',
    coveragePathIgnorePatterns: ['index.ts']
}