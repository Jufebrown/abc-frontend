app.factory('gameFactory', function($http, $q) {

  const token = localStorage.token

  return {

    getRandomLetter: () => String.fromCharCode(97 + Math.floor(Math.random() * 26)).toUpperCase(),

    checkStartLetter: (answer, questionLetter) => {
      let compareWord = answer.toLowerCase()
      if(compareWord.charAt(0) === questionLetter) {
        return true
      }
    },

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
        if(response.data === null) {
          console.log('response from null', response.data)
        } else {
          console.log('response', response.data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
    },

  }
})
