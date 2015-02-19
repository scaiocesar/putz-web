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



app.factory('UserService', ['$resource',
  function($resource) {
    return {
      validate: $resource(rstAPI+'/login')
    };
  }]);

app.controller('LoginCtrl', function ($scope, UserService, $resource) {

  // do login
  $scope.login = function(user) {
      UserService.validate.get(user, function (response) {
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
