'use strict';

/**
 * @ngdoc function
 * @name mdComApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mdComApp
 */
angular.module('mdComApp')
  .controller('AboutCtrl', function ($scope, navController) {
    navController.navSelection('ABOUT');
  });
