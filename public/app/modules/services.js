// Services module.
var serv = angular.module("Mountains.Services", []);

// Load services.
serv.factory('Services.Register', require("services/register"));
serv.factory('Services.Login', require("services/login"));