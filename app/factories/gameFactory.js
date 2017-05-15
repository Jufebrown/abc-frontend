app.factory('gameFactory', function($http, $q) {

  const token = localStorage.token

  return {

    newGame: () => {
      return $http({
        method: 'POST',
        url: `http://localhost:3000/api/v1/games/new`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      })
      .catch((err) => {
        console.log('err', err)
      })
    },

    getRandomLetter: () => String.fromCharCode(97 + Math.floor(Math.random() * 26)).toUpperCase(),

    checkStartLetter: (answer, questionLetter) => {
      let compareWord = answer.toLowerCase()
      if(compareWord.charAt(0) === questionLetter) {
        return true
      }
    },

    analyzeSpeciesApiResults: (answer, data) => {
      // checks to see if any results were returned
      if (data.length > 0) {
        console.log('data is not 0 length')
        // loops through data objects
        for (var i = 0; i < data.length; i++) {
          // checks to see if there is a canonical name
          if (data.canonicalName) {
            console.log('there is a canonical name')
            // checks to see if canonical name is the same as the answer
            if (data.canonicalName.toLowerCase() === answer.toLowerCase()) {
              console.log('canonicalName is the same as answer')
              // checks to see if it's in the animal kingdom
              if (data[i].kingdom.toLowerCase() === 'animalia' || 'metazoa') {
                console.log('kindom is animal or metazoa, should return true')
                return true
              }
            }
          } else if (data[i].vernacularNames > 0) {
            // loops through vernacular names
            for (var j = 0; j < data[i].vernacularNames.length; j++) {
              // checks to see if vernacularName is the same as the answer
              if(data[i].vernacularNames[j].vernacularName.toLowerCase() === answer.toLowerCase()) {
                console.log('vernacular name is same as answer')
                // checks to see if there is a kingdom key
                if (data[i].kingdom) {
                  // checks to see if kingdom is correct to make the creature an animal
                  if (data[i].kingdom.toLowerCase() === 'animalia' || 'metazoa') {
                    return true
                  }
                } else {
                  //TODO: logic for no kingdom when vernacular name matches
                }
              }
            }
          }
        }
      } else {
        // if no data, returns false
        return false
      }
      // if it makes it through loop of all data without returning true, returns false
      return false
    },

    searchSpeciesApi: function(animal) {
      let speciesUrl = `http://api.gbif.org/v1/species/search?q=` + animal
      console.log('speciesUrl', speciesUrl)
      return $http.get(speciesUrl)
    },

    checkAnswer: function(answer) {
      return $http({
        method: 'GET',
        url: `http://localhost:3000/api/v1/word/${answer}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      })
      .catch((err) => {
        console.log(err)
      })
    },

  }
})
