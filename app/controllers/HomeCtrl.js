`use strict`

app.controller('HomeCtrl', function($scope, $location, authFactory, gameFactory) {

  $scope.authStatus = () => {
    $scope.isLoggedIn = false
    localStorage.setItem('isLoggedIn', false)
    const token = localStorage.token
    if(token){
      authFactory.ensureAuthenticated(token)
      .then((user) => {
        if (user.data.status === 'success')
        $scope.isLoggedIn = true
        $scope.username = localStorage.username
        localStorage.setItem('isLoggedIn', true)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }

  $scope.newGame = () => {
    localStorage.questionCount = 0
    localStorage.correctAnswerCount = 0
    localStorage.incorrectAnswerCount = 0
    // gameFactory.newGame()
    // .then((res) => {
    //   console.log('res', res)
    // })
    $location.url('/game')
  }

  $scope.logout = () => {
    authFactory.logout()
    $location.url('/')
  }

  $scope.authStatus()

})
