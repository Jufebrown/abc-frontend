app.factory('authFactory', function($http) {
  return {

    register: function({username, password}) {
      const baseURL = 'http://localhost:3000/api/v1/auth/';
      return $http({
        method: 'POST',
        url: baseURL + 'register',
        data: {username, password},
        headers: {'Content-Type': 'application/json'}
      })
    },

    login: function({username, password}) {
      const baseURL = 'http://localhost:3000/api/v1/auth/';
      return $http({
        method: 'POST',
        url: baseURL + 'login',
        data: {username, password},
        headers: {'Content-Type': 'application/json'}
      })
    }
  }
})
