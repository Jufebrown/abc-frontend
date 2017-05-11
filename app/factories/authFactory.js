app.factory('authFactory', function($http) {

  const baseURL = 'http://localhost:3000/api/v1/auth/';

  return {

    register: function({username, password}) {
      return $http({
        method: 'POST',
        url: baseURL + 'register',
        data: {username, password},
        headers: {'Content-Type': 'application/json'}
      })
    },

    login: function({username, password}) {
      return $http({
        method: 'POST',
        url: baseURL + 'login',
        data: {username, password},
        headers: {'Content-Type': 'application/json'}
      })
    },

    ensureAuthenticated: function(token) {
      return $http({
        method: 'GET',
        url: baseURL + 'user',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      })
    }

  }
})
