module.exports = {
  testPathIgnorePatterns: [
    'node_modules',
  ],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  moduleDirectories: [
    'node_modules',
  ],
  testEnvironment: 'node',
  testRegex: 'test.ts$',
  transform: {
    '^.+\\.test.(ts|tsx)$': 'ts-jest',
  },
  preset: 'ts-jest',
  testMatch: null
}
