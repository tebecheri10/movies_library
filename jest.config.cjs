module.exports = {
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/src/__mocks__/styleMock.js",
    "^slick-carousel$": "<rootDir>/src/__mocks__/slickMock.js",
    "\\.(jpg|jpeg|png|gif)$": "<rootDir>/src/__mocks__/fileMock.js",
    "^slick-carousel/slick/slick\\.css$": "identity-obj-proxy",
    "^slick-carousel/slick/slick-theme\\.css$": "<rootDir>/node_modules/slick-carousel/slick/slick-theme.css",
    "\\.(css|less)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '\\.(webp|svg|png|jpg|jpeg|gif)$',
   '/node_modules/(?!(reat-slick-carousel)/)'
  ],  
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect", 
    "<rootDir>/src/setupTests.js", 
  ]
};
