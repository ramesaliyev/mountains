// Create client vendor css and js files list.

// Get paths.
var paths = require('configs/paths');

// JS Vendors.
var js = [
  paths.bower + 'angular/angular.min.js',
  paths.bower + 'angular-route/angular-route.min.js',
  paths.bower + 'angular-resource/angular-resource.min.js',
  paths.bower + 'angular-cookies/angular-cookies.min.js',
  paths.bower + 'angular-ui-notification/dist/angular-ui-notification.min.js',
  paths.bower + 'socket.io-client/socket.io.js',
  paths.bower + 'lodash/lodash.min.js',
];

// CSS Vendors.
var css = [
  paths.bower + 'normalize-css/normalize.css',
  paths.bower + 'angular-ui-notification/dist/angular-ui-notification.css'
];

// Export vendors.
module.exports = {
  css: css,
  js : js
};