'use strict';

/**
 * @ngdoc function
 * @name mdComApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mdComApp
 */
angular.module('mdComApp')
  .controller('AboutCtrl', function ($scope, $window) {
    //navigationService.navSelection('ABOUT');
    $scope.$emit('navEvent', { loc: 'about' });

    $scope.goLinkedin = function() {
       $window.open('https://www.linkedin.com/in/mario-alejandro-duran-406bb923', '_blank'); // in new tab
    };
  });
