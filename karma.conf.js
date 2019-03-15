const webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jquery-3.2.1', 'jasmine'],
    files: [
      'src/*.js',
      'spec/*spec.js'
    ],
    webpack: webpackConfig,
    exclude: [
    ],
    preprocessors: {
      'src/*.js': ['webpack', 'sourcemap'],
      'spec/*spec.js': ['webpack', 'sourcemap']
    },
    plugins: [
      'karma-jquery',
      'karma-webpack',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter'
    ],
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}






// // Karma configuration
// // Generated on Fri Mar 15 2019 10:10:50 GMT-0700 (Pacific Daylight Time)
//
// module.exports = function(config) {
//   config.set({
//
//     // base path that will be used to resolve all patterns (eg. files, exclude)
//     basePath: '',
//
//
//     // frameworks to use
//     // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
//     frameworks: ['jasmine'],
//
//
//     // list of files / patterns to load in the browser
//     files: [
//     ],
//
//
//     // list of files / patterns to exclude
//     exclude: [
//     ],
//
//
//     // preprocess matching files before serving them to the browser
//     // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
//     preprocessors: {
//     },
//
//
//     // test results reporter to use
//     // possible values: 'dots', 'progress'
//     // available reporters: https://npmjs.org/browse/keyword/karma-reporter
//     reporters: ['progress'],
//
//
//     // web server port
//     port: 9876,
//
//
//     // enable / disable colors in the output (reporters and logs)
//     colors: true,
//
//
//     // level of logging
//     // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
//     logLevel: config.LOG_INFO,
//
//
//     // enable / disable watching file and executing tests whenever any file changes
//     autoWatch: true,
//
//
//     // start these browsers
//     // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
//     browsers: ['Chrome'],
//
//
//     // Continuous Integration mode
//     // if true, Karma captures browsers, runs the tests and exits
//     singleRun: false,
//
//     // Concurrency level
//     // how many browser should be started simultaneous
//     concurrency: Infinity
//   })
// }
