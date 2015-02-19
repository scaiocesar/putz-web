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

//var rstAPI = "http://homologacao.aloingressos.com.br:8081/putz-rest/login";
var rstAPI = "http://localhost:8080/putz-rest/login";

app.factory('User', ['$resource',
  function($resource) {
    return {
      validate: $resource(rstAPI)
    };
  }]);

app.controller('LoginCtrl', function ($scope, User, $resource) {

  // do login
  $scope.login = function(user) {
    User.validate.get(user, function (response) {
      alert(response.name);
      $scope.user = '';
    }, function (data, status) {
      $scope.user = '';
      alert("Usuario invalido!!");
    });
  }

  // Add user
  $scope.addPlayer = function(user) {
    $scope.players.push(user);
  }
});
