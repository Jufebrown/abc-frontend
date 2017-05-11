`use strict`

app.controller('LoginCtrl', function($scope, $location, $auth) {
  $scope.login = function() {
    $auth.login($scope.user)
      .then(function() {
        console.log('You have successfully signed in!');
        $location.path('/');
      })
      .catch(function(error) {
        console.error(error.data.message, error.status);
      });
  };
  $scope.authenticate = function(provider) {
    $auth.authenticate(provider)
      .then(function() {
        console.log('You have successfully signed in.');
        $location.path('/');
      })
      .catch(function(error) {
        if (error.message) {
          // Satellizer promise reject error.
          console.error(error.message);
        } else if (error.data) {
          // HTTP response error from server
          console.error(error.data.message, error.status);
        } else {
          console.error(error);
        }
      });
  };
});
