'use strict';

/**
 * @ngdoc directive
 * @name mdComApp.directive:showErrors
 * @description
 * # showErrors
 */
angular.module('mdComApp')
  .directive('showErrors', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the showErrors directive');
      }
    };
  });
