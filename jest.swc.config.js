const sharedConfig = require('./jest.default.config.js');

module.exports = {
  ...sharedConfig,
  testEnvironment: "node",
  transform: {
    "\\.spec.[jt]sx?$": [
      "@swc/jest",
      {
        "jsc": {
          "transform": {
            "react": {
              "runtime": "automatic"
            }
          }
        }
      }
    ]
  },
  textRegex: "\\.spec.[jt]sx?$"
};