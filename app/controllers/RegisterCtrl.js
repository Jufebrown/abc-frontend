`use strict`

app.controller('RegisterCtrl', function($scope, $location, authFactory) {

  $scope.register = function() {
    console.log($scope.user)
    authFactory.register($scope.user)
    .then(function(response) {
      console.log('token', response.data)
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
