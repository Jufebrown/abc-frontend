`use strict`

const app = angular.module('ABC', ['ngRoute', 'satellizer'])

app.config(function($routeProvider, $authProvider) {

  /**
   * Helper auth functions
   */
  const skipIfLoggedIn = ['$q', '$auth', function($q, $auth) {
    const deferred = $q.defer();
    if ($auth.isAuthenticated()) {
      deferred.reject();
    } else {
      deferred.resolve();
    }
    return deferred.promise;
  }];

  const loginRequired = ['$q', '$location', '$auth', function($q, $location, $auth) {
    const deferred = $q.defer();
    if ($auth.isAuthenticated()) {
      deferred.resolve();
    } else {
      $location.path('/login');
    }
    return deferred.promise;
  }];

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
