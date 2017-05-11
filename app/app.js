`use strict`

const app = angular.module('ABC', ['ngRoute', 'ABC.config', 'ABC.auth'])

$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

app.config(['$routeProvider', function($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).when('/register', {
        templateUrl: 'partials/register.html',
        controller: 'RegisterCtrl'
      }).when('/game', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      }).when('/game', {
        templateUrl: 'partials/game.html',
        controller: 'GameCtrl'
      }).when('/stats', {
        templateUrl: 'partials/stats.html',
        controller: 'StatsCtrl'
      }).otherwise({
        redirectTo: '/'
      })
}])
