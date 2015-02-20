/**
 * Created by Gabo on 2/16/2015.
 */
'use strict';

/**
 * @ngdoc function
 * @name putzApp.user:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the putzApp
 */

app.factory('LoginService', ['$resource', 'Config',
  function ($resource, Config) {
    return {
      validate: $resource(Config.apiUrl + 'login/validate'),
      retrievePassword: $resource(Config.apiUrl + 'login/retrievePassword')
    };
  }]);

app.controller('LoginCtrl', function ($scope, LoginService, $resource, $location) {
  // do login
  $scope.login = function (user) {
    LoginService.validate.save(user, function (response) {
      alert(response.name);
      $scope.user = '';
    }, function (data, status) {
      $scope.user = '';
      alert("Usuario invalido!!");
    });
  }

  // forget password
  $scope.retrievePassword = function (user) {
    LoginService.retrievePassword.get(user, function (response) {
      alert("Senha enviada com sucesso!!");
      $scope.user = '';
      // set login path
      $location.path('/');
    }, function (data, status) {
      $scope.user = '';
      alert("E-mail não cadastrado");
    });
  }
});
