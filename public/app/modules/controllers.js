// Controllers module.
var ctrl = angular.module("Mountains.Controllers", []);

// Load controllers.
ctrl.controller('Controllers.Main',         require("controllers/main"));
ctrl.controller('Controllers.Homepage',     require("controllers/homepage"));
ctrl.controller('Controllers.Login',        require("controllers/login"));
ctrl.controller('Controllers.Logout',       require("controllers/logout"));
ctrl.controller('Controllers.Register',     require("controllers/register"));
ctrl.controller('Controllers.Post',         require("controllers/post"));
ctrl.controller('Controllers.Read',         require("controllers/read"));
ctrl.controller('Controllers.User',         require("controllers/user"));
ctrl.controller('Controllers.Leaderboard',  require("controllers/leaderboard"));