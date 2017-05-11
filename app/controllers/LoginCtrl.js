`use strict`

app.controller('LoginCtrl', function($scope, $location, authFactory) {

  $scope.login = function() {
    authFactory.login($scope.user)
    .then(function(response) {
      localStorage.setItem('username', $scope.user.username)
      localStorage.setItem('token', response.data.token)
      console.log(localStorage)
    })
    .catch(function(response) {
      $scope.errorMessage = {};
      angular.forEach(response.data.message, function(message, field) {
        $scope.loginForm[field].$setValidity('server', false);
        $scope.errorMessage[field] = response.data.message[field];
      })
    })
  }
})
