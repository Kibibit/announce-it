module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageReporters: ["json", "lcov", "text", "clover", "html"],
  modulePathIgnorePatterns: ["<rootDir>/lib/"],
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/**/index.ts",
    "!src/announce-it-cli.ts"
  ],
  watchPathIgnorePatterns: [
    ".*test-results.*\\.js"
  ],
  reporters: ["default", "jest-stare", "jest-github-actions-reporter"],
  testResultsProcessor: "./node_modules/jest-stare",
  "testLocationInResults": true
};
