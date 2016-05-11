'use strict';

/**
 * @ngdoc function
 * @name mdComApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mdComApp
 */
angular.module('mdComApp')
  .controller('MainCtrl', function (navigationService) {
    navigationService.navSelection('HOME');
  });
