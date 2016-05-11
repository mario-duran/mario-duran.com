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
      restrict: 'A',
      link: function (scope, el) {
        var inputEl   = el[0];
        var inputNgEl = angular.element(inputEl);

        scope.$on('show-errors-check-validity', function() {
          el.toggleClass('alert-danger',inputNgEl.hasClass('ng-invalid'));
        });

        scope.$on('cleanup-errors-check-validity', function() {
          inputNgEl.removeClass('alert-danger');
        });

      }
    };
  });
