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
      navSelection: function(imAt) {

        var navBar = angular.element(document.getElementById('topNavigation'));
        var navElements = navBar.find('li');

        navElements.removeClass('active'); //CLEAN UP

        if(imAt === 'HOME') {
          navBar.removeClass('navbar-shrink'); //CASE IS HOME CHANGE TO THE MAIN NAV
        } else {
          navBar.addClass('navbar-shrink');
          navBar.find('.' + imAt).addClass('active');
        }

        return true;
      }

    };
  });
