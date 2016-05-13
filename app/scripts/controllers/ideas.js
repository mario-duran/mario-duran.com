'use strict';

/**
 * @ngdoc function
 * @name mdComApp.controller:IdeasCtrl
 * @description
 * # IdeasCtrl
 * Controller of the mdComApp
 */
angular.module('mdComApp')
  .controller('IdeasCtrl', function ($scope) {
    $scope.$emit('navEvent', { loc: 'ideas' });
    
  });
