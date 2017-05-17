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
    $scope.gameState = {
      question: false,
      thinking: false,
      correct: false,
      incorrect: false,
      gameOver: true,
      wrongLetter: false
    }
  }

  $scope.questionNumber = localStorage.questionCount
  $scope.correctAnswerCount = localStorage.correctAnswerCount
  $scope.dbNull = false
  $scope.username = localStorage.getItem('username')
  $scope.questionLetter = gameFactory.getRandomLetter()

  $scope.getPic = () => {
    if($scope.picPosition === left) {
      let whichPicJson = 'leftpics.json'
    } else {
      let whichPicJson = 'rightpics.json'
    }
    gameFactory.getPicJson(whichPicJson)
  }

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
              console.log('incorrectAnswerCount after wrong answer',localStorage.incorrectAnswerCount)
              if(gameFactory.checkGameOver()) {
                $scope.gameState = {
                  question: false,
                  thinking: false,
                  correct: false,
                  incorrect: false,
                  gameOver: true,
                  wrongLetter: false
                }
              }
            }
          })
        } else {
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
        // console.log(err)
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
    // gameFactory.newGame()
    // .then((res) => {
    //   console.log('res', res)
    // })
    $route.reload()
  }

  $scope.quit = () => {
    $location.url('/')
  }

})
