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



app.factory('UserService', ['$resource',
    function($resource) {
        return {
            create: $resource(rstAPI+'/user')
        };
    }]);

app.controller('UserCtrl', function ($scope, UserService, $resource) {
    $scope.registerUser = function(user) {
        UserService.create.save(user, function (response) {
            alert(response.name);
            $scope.user = '';
        }, function (failedResponse) {
            $scope.user = '';
            alert("Usuario invalido!!");
        });
    }
});
