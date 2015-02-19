'use strict';

/**
 * @ngdoc overview
 * @name putzApp
 * @description
 * # putzApp
 *
 * Main module of the application.
 */

//var rstAPI = "http://homologacao.aloingressos.com.br:8081/putz-rest/";
var rstAPI = "http://localhost:8080/putz-rest/";

var app = angular
  .module('putzApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'MainCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'UserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
