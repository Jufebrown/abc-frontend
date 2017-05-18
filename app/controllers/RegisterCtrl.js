`use strict`

app.controller('RegisterCtrl', function($scope, $location, authFactory) {

  $scope.register = function() {
    authFactory.register($scope.user)
    .then(function(response) {
      localStorage.setItem('username', $scope.user.username)
      localStorage.setItem('token', response.data.token)
      $location.url('/')
    })
    .catch((err) => {
      console.log(err)
      Materialize.toast('username already registered with different password', 3000, 'rounded toast')
    })
  }
})
