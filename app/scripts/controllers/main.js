'use strict';

/**
 * @ngdoc function
 * @name mdComApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mdComApp
 */
angular.module('mdComApp')
  .controller('MainCtrl', function ($scope, navController) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    navController.navSelection('HOME');
  });
