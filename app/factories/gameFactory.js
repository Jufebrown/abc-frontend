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

    analyzeSpeciesApiResults: (answer, data) => {
      // checks to see if any results were returned
      if (data.length > 0) {
        // loops through data objects
        for (var i = 0; i < data.length; i++) {
          // checks to see if there are any vernacularNames
          if (data[i].vernacularNames > 0) {
            for (var j = 0; j < data[i].vernacularNames.length; j++) {
              // checks to see if vernacularName is the same as the answer
              if(data[i].vernacularNames[j].vernacularName === answer) {
                // checks to see if there is a kingdom key
                if (data[i].kingdom) {
                  // checks to see if kingdom is correct to make the creature an animal
                  if (data[i].kingdom === 'animalia' || 'metazoa') {
                    return true
                  } else {
                    return false
                  }
                }
              } else {
                return false
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
