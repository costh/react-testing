const sharedConfig = require('./jest.default.config.js');

module.exports = {
  ...sharedConfig,
  testEnvironment: "node",
  transform: {
    "\\.ui.[jt]sx?$": [
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
  textRegex: "\\.ui.[jt]sx?$"
};

