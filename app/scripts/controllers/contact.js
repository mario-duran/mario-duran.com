'use strict';

/**
 * @ngdoc function
 * @name mdComApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the mdComApp
 */
angular.module('mdComApp')
  .controller('ContactCtrl', function (navController) {
    navController.navSelection('CONTACT');
  });
