`use strict`

app.controller('GameCtrl', function($scope, $location, gameFactory, $route) {

  $scope.gameState = {
    question: true,
    thinking: false,
    correct: false,
    incorrect: false,
    gameOver: false,
    wrongLetter: false
  }

  localStorage.questionCount++
  localStorage.incorrectAnswerCount = parseInt(localStorage.questionCount) - (parseInt(localStorage.correctAnswerCount) + 1)

  if(gameFactory.checkGameOver()) {
    localStorage.questionCount--
    gameFactory.updateGame()
    .then(() => {
      $scope.numberUnique = JSON.parse(localStorage.getItem('answers')).length
      $scope.gameState = {
        question: false,
        thinking: false,
        correct: false,
        incorrect: false,
        gameOver: true,
        wrongLetter: false
      }
    })
  }

  $scope.questionNumber = localStorage.questionCount
  $scope.correctAnswerCount = localStorage.correctAnswerCount
  $scope.dbNull = false
  $scope.username = localStorage.getItem('username')
  $scope.questionLetter = gameFactory.getRandomLetter()

  $scope.getRandomImage = () => {
    $scope.randomBinary = gameFactory.randomNum(0, 1)
    // console.log('randomBinary', $scope.randomBinary)
    let whichPicJson = ''
    if($scope.randomBinary === 0) {
      whichPicJson = 'leftpics.json'
    } else {
      whichPicJson = 'rightpics.json'
    }
    gameFactory.getPicJson(whichPicJson)
    .then((data) => {
      // console.log('data', data)
      let picNum = gameFactory.randomNum(0, data.length)
      // console.log('picNum', picNum)
      $scope.randomImage = {src: '', style: '', alt: ''}
      $scope.randomImage.src = data[picNum].src
      $scope.randomImage.style = data[picNum].style
      $scope.randomImage.alt = data[picNum].alt
    })
    .catch((err) => {
      console.log(err)
    })
  }

  $scope.getRandomImage()

  $scope.checkAnimal = function() {
      $scope.gameState = {
        question: false,
        thinking: true,
        correct: false,
        incorrect: false,
        gameOver: false,
        wrongLetter: false
      }
    // console.log('$scope.questionLetter', $scope.questionLetter)
    if(gameFactory.checkStartLetter($scope.answer, $scope.questionLetter.toLowerCase())) {
      gameFactory.checkAnswer($scope.answer)
      .then(function(response) {
        // console.log('response from abc', response.data)
        if (response.data === null) {
          $scope.dbNull = true
          gameFactory.searchSpeciesApi($scope.answer)
          .then(({data}) => {
            // console.log('api data', data.results)
            if(gameFactory.analyzeSpeciesApiResults($scope.answer, data.results)) {
              if($scope.dbNull === true) {
                gameFactory.learnWord($scope.answer)
              }
              console.log('before updateUnique after api call')
              gameFactory.updateUnique($scope.answer)
              $scope.gameState = {
                question: false,
                thinking: false,
                correct: true,
                incorrect: false,
                gameOver: false,
                wrongLetter: false
              }
            } else {
              $scope.gameState = {
                question: false,
                thinking: false,
                correct: false,
                incorrect: true,
                gameOver: false,
                wrongLetter: false
              }
              localStorage.incorrectAnswerCount++
              if(gameFactory.checkGameOver()) {
                gameFactory.updateGame()
                $scope.numberUnique = JSON.parse(localStorage.getItem('answers')).length
                .then(() => {
                  $scope.gameState = {
                    question: false,
                    thinking: false,
                    correct: false,
                    incorrect: false,
                    gameOver: true,
                    wrongLetter: false
                  }
                })
              }
            }
          })
        } else {
          console.log('in db')
          gameFactory.updateUnique($scope.answer)
          $scope.gameState = {
            question: false,
            thinking: false,
            correct: true,
            incorrect: false,
            gameOver: false,
            wrongLetter: false
          }
        }
      })
      .catch((err) => {
        console.log(err)
      })
    } else {
      $scope.gameState = {
        question: false,
        thinking: false,
        correct: false,
        incorrect: false,
        gameOver: false,
        wrongLetter: true
      }
    }
  }

  $scope.correctNext = () => {
    localStorage.correctAnswerCount++
    $route.reload()
  }

  $scope.incorrectNext = () => {
    $route.reload()
  }

  $scope.newGame = () => {
    localStorage.questionCount = 0
    localStorage.correctAnswerCount = 0
    localStorage.incorrectAnswerCount = 0
    localStorage.setItem('answers', [])
    gameFactory.addNewGame()
    .then((res) => {
      localStorage.currentGame = res.data.id
    })
    .catch((err) => {
      console.log(err)
    })
    $route.reload()
  }

  $scope.quit = () => {
    $location.url('/')
  }

})
