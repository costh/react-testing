const sharedConfig = require('./jest.default.config.js');

module.exports = {
  ...sharedConfig,
  testEnvironment: "node",
  transform: {
    "\\.spec.[jt]sx?$": "babel-jest"
  },
  testRegex: "\\.spec.[jt]sx?$"
};
