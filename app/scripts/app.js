'use strict';

/**
 * @ngdoc overview
 * @name mdComApp
 * @description
 * # mdComApp
 *
 * Main module of the application.
 */
angular
  .module('mdComApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl',
        controllerAs: 'portfolio'
      })
      .when('/ideas', {
        templateUrl: 'views/ideas.html',
        controller: 'IdeasCtrl',
        controllerAs: 'ideas'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).service('navController', function(){
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
