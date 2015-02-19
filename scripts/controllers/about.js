'use strict';

/**
 * @ngdoc function
 * @name putzApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the putzApp
 */
angular.module('putzApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
