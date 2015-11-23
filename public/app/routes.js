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

        // Logout
        .when("/logout",{
            title      : "Mountains | Logout",
            templateUrl: "tpl/pages/login.tpl",
            controller : "Controllers.Logout"
        })

        // New Post
        .when("/post",{
            title      : "Mountains | New Post",
            templateUrl: "tpl/pages/post.tpl",
            controller : "Controllers.Post"
        })

        // Read Post
        .when("/read/:id",{
            title      : "Mountains | Read Post",
            templateUrl: "tpl/pages/read.tpl",
            controller : "Controllers.Read"
        })

        // User page
        .when("/user/:id",{
            title      : "Mountains | User",
            templateUrl: "tpl/pages/user.tpl",
            controller : "Controllers.User"
        })

        // Profile page
        .when("/profile",{
            title      : "Mountains | Profile",
            templateUrl: "tpl/pages/user.tpl",
            controller : "Controllers.User"
        })

        // Leaderboard
        .when("/leaderboard",{
            title      : "Mountains | Leaderboard",
            templateUrl: "tpl/pages/leaderboard.tpl",
            controller : "Controllers.Leaderboard"
        })

        // Otherwise, redirect to homepage.
        .otherwise("/");

    // Enable HTML5 Mode.
    $locationProvider.html5Mode(true);
  }]);
}