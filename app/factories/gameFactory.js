app.factory('gameFactory', function($http, $q) {

  const token = localStorage.token

  return {

    getRandomLetter: () => String.fromCharCode(97 + Math.floor(Math.random() * 26)).toUpperCase(),

    checkABCWord: (answer) => {
      return $http({
        method: 'GET',
        url: `http://localhost:3000/api/v1/word/${answer}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      })
      .then((response) => {
        if(response === null) {
          console.log('response', response)
        }
      })
      .catch((err) => {
        console.log(err)
      })
    },

  }
})
