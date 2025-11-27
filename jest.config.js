const path = require('path')

module.exports = {
  testEnvironment: 'node',
  roots: [path.resolve(__dirname)],
  testMatch: ['**/tests/**/*.test.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverageFrom: ['src/**/*.js'],
  coverageDirectory: 'coverage',
  verbose: true
}

