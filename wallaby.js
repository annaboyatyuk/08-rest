module.exports = function () {
  return {
    files: [
      'index.js',
      'src/*.js',
      'src/**/*.js',
      '!__test__/**/**/*.test.js',
    ],

    tests: [ 
      '__test__/**/**/*.test.js', 
    ],

    testFramework: 'jest',
    env: {
      type: 'node',
    },
  };
};