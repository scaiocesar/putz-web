'use strict';

/**
 * @ngdoc function
 * @name putzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the putzApp
 */
angular.module('putzApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
