app.factory('gameFactory', function($http, $q) {

  return {

    getRandomLetter: () => String.fromCharCode(97 + Math.floor(Math.random() * 26)).toUpperCase(),




  }
})
