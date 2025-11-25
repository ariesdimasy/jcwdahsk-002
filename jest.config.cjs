/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: {
      target: 'ES2019',
      module: 'CommonJS',
      esModuleInterop: true,
      skipLibCheck: true,
      strict: false
    }}]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testMatch: ['**/__tests__/**/*.test.(ts|js)'],
  collectCoverage: false,
};
