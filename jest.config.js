// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  browser: true,
  clearMocks: true,
  coverageDirectory: 'coverage',
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.svg$": "jest-svg-transformer"
  },
  moduleFileExtensions: [
    "js",
    "json",
    "jsx",
  ],
  modulePaths: [
    "<rootDir>",
    "<rootDir>/src",
  ],
  moduleNameMapper: {
    "^@vendor(.*)": "<rootDir>/vendor$1",
    "^@API(.*)$": "<rootDir>/src/api$1",
    "^@utils(.*)": "<rootDir>/src/utils$1",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/tests/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/tests/__mocks__/styleMock.js"
  },
  notify: true,
  roots: ["<rootDir>", "<rootDir>/tests", "<rootDir>/src"],
  displayName: {
    name: 'Xavier',
    color: 'red',
  },
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.js"
  ]
};
