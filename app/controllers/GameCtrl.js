`use strict`

app.controller('GameCtrl', function($scope, $location, gameFactory) {

  $scope.gameState = {
                       question: true,
                       thinking: false,
                       correct: false,
                       incorrect: false
                     }

  $scope.username = localStorage.getItem('username')

  $scope.questionLetter = gameFactory.getRandomLetter()
  $scope.currentLetter = $scope.questionLetter

  $scope.checkAnimal = function() {
    $scope.gameState = {
                         question: false,
                         thinking: true,
                         correct: false,
                         incorrect: false
                       }
    if(gameFactory.checkStartLetter($scope.answer, $scope.currentLetter)) {
      gameFactory.checkABCWord($scope.answer)
      // .then(function(response) {
      //   if(response === null) {

      //   }
      // })
      .catch((err) => {
        console.log(err)
      })
    }
  }
})
