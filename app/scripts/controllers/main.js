'use strict';

/**
 * @ngdoc function
 * @name mdComApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mdComApp
 */
angular.module('mdComApp')
  .controller('MainCtrl', function ($scope) {
    $scope.$emit('navEvent', { loc: 'home' });
    //navigationService.navSelection('HOME');
  });
