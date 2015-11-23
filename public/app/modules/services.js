// Services module.
var serv = angular.module("Mountains.Services", []);

// Load services.
serv.factory('Services.Register', require("services/register"));
serv.factory('Services.Login', require("services/login"));
serv.factory('Services.Post', require("services/post"));
serv.factory('Services.User', require("services/user"));
serv.factory('Services.Badge', require("services/badges"));