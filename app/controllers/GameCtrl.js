`use strict`

app.controller('GameCtrl', function($scope, $location) {

  $scope.login = function() {
    authFactory.login($scope.user)
    .then(function(response) {
      localStorage.setItem('username', $scope.user.username)
      localStorage.setItem('token', response.data.token)
      $location.url('/')
    })
    .catch((err) => {
      console.log(err)
    })
  }
})
