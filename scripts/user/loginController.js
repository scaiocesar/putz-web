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


app.factory("User", function ($resource) {
  return $resource("http://homologacao.aloingressos.com.br:8081/putz-rest/login", {
    validate: {method: 'GET'}
  });
});

app.controller('LoginCtrl', function ($scope, User, $resource) {
  $scope.login = function(user) {
    User.get(user, function (response) {
      alert(response.name);
      $scope.user = '';
    }, function (failedResponse) {
      $scope.user = '';
	  alert("Usuario invalido!!");
    });
  }
});
