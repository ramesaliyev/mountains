/**
 * Mountains Client Side Angular App
 */

// Load modules.
require('modules/services');
require('modules/controllers');

// Create main module. 
angular.module("Mountains", ["ngRoute", "ngResource", "Mountains.Services", "Mountains.Controllers"]);