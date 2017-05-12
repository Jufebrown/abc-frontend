`use strict`

app.controller('HomeCtrl', function($scope, $location, authFactory) {

  $scope.authStatus = function() {
    $scope.isLoggedIn = false
    const token = localStorage.token
    if(token){
      authFactory.ensureAuthenticated(token)
      .then((user) => {
        if (user.data.status === 'success')
        $scope.isLoggedIn = true;
        $scope.username = localStorage.username
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }

  $scope.logout = () => {
    authFactory.logout()
    $location.path('/')
  }

  $scope.authStatus()

})
