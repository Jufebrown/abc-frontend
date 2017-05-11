`use strict`

app.controller('RegisterCtrl', function($scope, $location, authFactory) {

  $scope.register = function() {
    console.log($scope.user)
    authFactory.register($scope.user)
    .then(function(response) {
      localStorage.setItem('username', $scope.user.username)
      localStorage.setItem('token', response.data.token)
    })
    .catch((err) => {
      console.log(err)
    })
  }
})
