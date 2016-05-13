'use strict';

/**
 * @ngdoc directive
 * @name mdComApp.directive:navigationBar
 * @description
 * # navigationBar
 */
angular.module('mdComApp')
  .directive('navigationBar', function () {
    return {
      templateUrl: 'views/navigationBar.html',
      restrict: 'E',
      replace:'true',
      link: function postLink(scope, element) {
        //element.text('this is the navigationBar directive');
        scope.el = element;
        scope.$on('navEvent', function (event, args) {
          scope.loc = args.loc;
          scope.collapse = true;
         });

         element.find('.navbar-collapse ul li a').click(function() { //reset the menu
            element.find('.navbar-toggle:visible').click();
          });
      }
    };
  });
