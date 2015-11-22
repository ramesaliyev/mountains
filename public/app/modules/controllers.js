// Controllers module.
var ctrl = angular.module("Mountains.Controllers", []);

// Load controllers.
ctrl.controller('Controllers.Main',     require("controllers/main"));
ctrl.controller('Controllers.Homepage', require("controllers/homepage"));
ctrl.controller('Controllers.Login',    require("controllers/login"));
ctrl.controller('Controllers.Register', require("controllers/register"));