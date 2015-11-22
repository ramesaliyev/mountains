/**
 * Mountains Client Side Angular App
 */

// Load modules.
require('modules/services');
require('modules/controllers');

// Create main app. 
var app = angular.module("Mountains", ["ngRoute", "ngResource", "ngCookies", "ui-notification", "Mountains.Services", "Mountains.Controllers"]);

// Create routes.
require('routes')(app);

// Config app.
require('config')(app);