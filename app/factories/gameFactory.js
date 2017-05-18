app.factory('gameFactory', function($http, $q) {


  return {

    addNewGame: () => {
      const token = localStorage.token
      return $http({
        method: 'POST',
        url: `http://localhost:3000/api/v1/games/new`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        },
        data: {number_asked: 1}
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
      console.log('data from analyze', data)
      // checks to see if any results were returned
      if (data.length > 0) {
        console.log('data is not 0 length')
        // loops through data objects
        for (var i = 0; i < data.length; i++) {
          // checks to see if there is a canonical name
          if (data[i].canonicalName) {
            console.log('there is a canonical name', data[i].canonicalName.toLowerCase())
            // checks to see if canonical name is the same as the answer
            if (data[i].canonicalName.toLowerCase() === answer.toLowerCase()) {
              console.log('canonicalName is the same as answer')
              // checks to see if it's in the animal kingdom
              if (data[i].kingdom) {
                // checks to see if kingdom is correct to make the creature an animal
                if ((data[i].kingdom.toLowerCase() === 'animalia') || (data[i].kingdom.toLowerCase() === 'metazoa')) {
                  console.log('animalia or metazoa')
                  return true
                }
              }
            }
          }
          if (data[i].vernacularNames.length > 0) {
            console.log('there is at least one vernacular name')
            // loops through vernacular names
            for (var j = 0; j < data[i].vernacularNames.length; j++) {
              console.log(data[i].vernacularNames[j].vernacularName.toLowerCase())
              // checks to see if vernacularName is the same as the answer
              if(data[i].vernacularNames[j].vernacularName.toLowerCase() === answer.toLowerCase()) {
                console.log('vernacular name is same as answer')
                // checks to see if there is a kingdom key
                if (data[i].kingdom) {
                  // checks to see if kingdom is correct to make the creature an animal
                  if ((data[i].kingdom.toLowerCase() === 'animalia') || (data[i].kingdom.toLowerCase() === 'metazoa')) {
                    console.log('animalia or metazoa')
                    return true
                  }
                }
                //   //TODO: logic for no kingdom when vernacular name matches
                // }
              }
            }
          }
        } //end of for data.length
      } else if(data.length === 0) {
        console.log('data length = 0')
        // if no data, returns false
        return false
      }
      // if it makes it through loop of all data without returning true, returns false
      return false
    },

    searchSpeciesApi: function(animal) {
      let speciesUrl = `http://api.gbif.org/v1/species/search?q=${animal}&rank=GENUS`
      console.log('speciesUrl', speciesUrl)
      return $http.get(speciesUrl)
    },

    checkAnswer: function(answer) {
      const token = localStorage.token
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

    getPicJson: (file) => {
      return $http.get(file)
      .then((data) => {
        return data.data
      })
      .catch(function() {
          console.log(`could not find ${file}`)
      })
    },

    randomNum: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,

    checkGameOver: () => {
      if(localStorage.incorrectAnswerCount >= 3) {
        return true
      } else {
        return false
      }
    },

    updateGame: () => {
      const token = localStorage.token
      const gameID = parseInt(localStorage.currentGame)
      const number_asked = parseInt(localStorage.questionCount)
      const number_correct = parseInt(localStorage.correctAnswerCount)
      const number_unique = JSON.parse(localStorage.getItem('answers')).length
      return $http({
        method: 'PATCH',
        url: `http://localhost:3000/api/v1/games/${gameID}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        },
        data: {number_asked, number_correct, number_unique}
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log('err', err)
      })
    },

    learnWord: (correct_word) => {
      const token = localStorage.token
      return $http({
        method: 'POST',
        url: `http://localhost:3000/api/v1/words/new`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        },
        data: {correct_word}
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log('err', err)
      })
    }

  }
})
