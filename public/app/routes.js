// Save routes.
module.exports = function(app){
  // Config routes.
  app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
    // Routes
    $routeProvider
        // Homepage
        .when("/",{
            title      : "Mountains",
            templateUrl: "tpl/pages/homepage.tpl",
            controller : "Controllers.Homepage"
        })

        // Register
        .when("/register",{
            title      : "Mountains | Register",
            templateUrl: "tpl/pages/register.tpl",
            controller : "Controllers.Register"
        })

        // Login
        .when("/login",{
            title      : "Mountains | Login",
            templateUrl: "tpl/pages/login.tpl",
            controller : "Controllers.Login"
        })

        // Otherwise, redirect to homepage.
        .otherwise("/");

    // Enable HTML5 Mode.
    $locationProvider.html5Mode(true);
  }]);
}