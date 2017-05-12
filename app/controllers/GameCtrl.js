`use strict`

app.controller('GameCtrl', function($scope, $location, gameFactory) {

  $scope.username = localStorage.getItem('username')

  $scope.questionLetter = gameFactory.getRandomLetter()

  // $scope.checkAnimal = function() {
  //   gameFactory.checkABCWord($scope.answer)
  //   .then(function(response) {
  //     if(response === null) {

  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }
})
