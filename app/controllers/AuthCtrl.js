(function() {

'use strict'

  angular
    .module('ABC.auth', [])
    .controller('authLoginCtrl', authLoginCtrl)

  authLoginController.$inject = []

  function authLoginCtrl() {
    /*jshint validthis: true */
    const vm = this
    vm.test = 'just a test'
  }
})()
