`use strict`

app.controller('GameCtrl', function($scope, $location, gameFactory) {

  $scope.username = localStorage.getItem('username')

  $scope.questionLetter = gameFactory.getRandomLetter()

  // $scope.checkAnimal = function() {
  //   // gameFactory.checkWord($scope.answer)
  //   // .then(function(response) {

  //   // })
  //   // .catch((err) => {
  //   //   console.log(err)
  //   // })
  // }
})
