'use strict';

/**
 * @ngdoc service
 * @name mdComApp.navigationService
 * @description
 * # navigationService
 * Service in the mdComApp.
 */
angular.module('mdComApp')
  .service('navigationService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    return {
      navSelection: function() {

        return true;
      }

    };
  });
