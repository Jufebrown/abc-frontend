`use strict`

app.controller('GameCtrl', function($scope, $location, gameFactory) {

  $scope.gameState ={
    question: true,
    thinking: false,
    correct: false,
    incorrect: false
  }

  localStorage.questionCount++

  $scope.
  $scope.dbNull = false
  $scope.username = localStorage.getItem('username')
  $scope.questionLetter = gameFactory.getRandomLetter()

  $scope.checkAnimal = function() {
    $scope.gameState ={
      question: false,
      thinking: true,
      correct: false,
      incorrect: false
    }
    console.log('$scope.questionLetter', $scope.questionLetter)
    if(gameFactory.checkStartLetter($scope.answer, $scope.questionLetter.toLowerCase())) {
      gameFactory.checkAnswer($scope.answer)
      .then(function(response) {
        console.log('response from abc', response.data)
        if (response.data === null) {
          $scope.dbNull = true
          gameFactory.searchSpeciesApi($scope.answer)
          .then(({data}) => {
            if(gameFactory.analyzeSpeciesApiResults($scope.answer, data.results)) {
              gameFactory.correctAnswer(answer)
            }
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
})
