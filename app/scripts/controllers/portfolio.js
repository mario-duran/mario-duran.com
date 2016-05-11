'use strict';

/**
 * @ngdoc function
 * @name mdComApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the mdComApp
 */
angular.module('mdComApp')
  .controller('PortfolioCtrl', function (navController) {
    navController.navSelection('PORTFOLIO');
  });
