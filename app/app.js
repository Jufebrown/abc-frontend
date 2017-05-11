`use strict`

const app = angular.module('ABC', ['ngRoute'])

app.config(function($routeProvider) {

  /**
   * App routes
   */
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    })
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl',
      resolve: {
        skipIfLoggedIn: skipIfLoggedIn
      }
    })
    // .when('/register', {
    //   templateUrl: 'partials/register.html',
    //   controller: 'RegisterCtrl',
    //   resolve: {
    //     skipIfLoggedIn: skipIfLoggedIn
    //   }
    // })
    // .when('/logout', {
    //   template: null,
    //   controller: 'LogoutCtrl'
    // })
    // .when('/game', {
    //   templateUrl: 'partials/game.html',
    //   controller: 'GameCtrl',
    //   resolve: {
    //     loginRequired: loginRequired
    //   }
    // })
    .otherwise('/');

  /**
   *  Satellizer config
   */

  $authProvider.loginUrl = 'localhost:3000/auth/login';
  $authProvider.signupUrl = 'localhost:3000/auth/register';

});
