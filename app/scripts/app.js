'use strict';

/**
 * @ngdoc overview
 * @name mdComApp
 * @description
 * # mdComApp
 *
 * Main module of the application.
 */
angular
  .module('mdComApp', [
    'ngAnimate',
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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).service('navController', function(){
    return {
      navSelection: function(imIn) {
        console.log(imIn);
        var navBar = angular.element(document.getElementById('topNavigation'));

        if(imIn === 'HOME') {
          navBar.removeClass('navbar-shrink');

        } else {
          navBar.addClass('navbar-shrink');
        }
        return true;
      }

    };
  });
