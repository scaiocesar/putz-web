/**
 * Created by Caio on 2/16/2015.
 */
'use strict';

/**
 * @ngdoc function
 * @name putzApp.user:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the putzApp
 */

app.factory('UserService', ['$resource','Config',
    function($resource,Config) {
        return {
            create: $resource(Config.apiUrl+'/user/create')
        };
    }]);

app.controller('UserCtrl', function ($scope, UserService, $resource) {
  // create a new user.
    $scope.registerUser = function(user) {
        UserService.create.save(user, function (response) {
            alert("Cadastro Realizado com sucesso");
            $scope.user = '';
        }, function (failedResponse) {
            $scope.user = '';
            alert("Erro ao cadastrar usuario");
        });
    }
});
