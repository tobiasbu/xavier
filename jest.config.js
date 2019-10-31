// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  browser: true,
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: [
    "js",
    "json",
    "jsx",
  ],
  "moduleNameMapper": {
    "^\@vendor/(.*)": "<rootDir>/vendor/$1",
  },

  notify: true,
  rootDir: ".",
  roots: ["<rootDir>/tests", "<rootDir>/src"],
  displayName: {
    name: 'MAGNETOS',
    color: 'red',
  },
};
