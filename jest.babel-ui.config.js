const sharedConfig = require('./jest.default.config.js');

module.exports = {
  ...sharedConfig,
  testEnvironment: "@happy-dom/jest-environment",
  transform: {
    "\\.ui.[jt]sx?$": "babel-jest"
  },
  testRegex: "\\.ui.[jt]sx?$"
};