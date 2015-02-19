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

app.factory('LoginService', ['$resource','Config',
  function($resource,Config) {
    return {
      validate: $resource(Config.apiUrl+'/login/validate')
    };
  }]);

app.controller('LoginCtrl', function ($scope, LoginService, $resource) {
  // do login
  $scope.login = function(user) {
    LoginService.validate.save(user, function (response) {
      alert(response.name);
      $scope.user = '';
    }, function (data, status) {
      $scope.user = '';
      alert("Usuario invalido!!");
    });
  }
});
