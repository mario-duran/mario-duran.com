'use strict';

/**
 * @ngdoc function
 * @name mdComApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the mdComApp
 */
angular.module('mdComApp')
  .controller('ContactCtrl', function ($scope, $http, $location, navigationService) {
    navigationService.navSelection('CONTACT');
    $scope.contactInfo = {
      name:'',
      email:'',
      message:''
    };

    $scope.sendMessage = function() {
      //IF PASS THE VALIDATION sendMessage
      console.log($scope.contactForm);
      if (!$scope.contactForm.$valid) {
        //ERRORS

      } else {
        var config = {
              headers : {
                  'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
              }
          };

        $http.post('contact_me.php', $scope.contactInfo, config)
           .then(
               function(response){
                 console.log(response);
                 //$location.path('/confirmation');
               },
               function(response){
                 // failure callback
                 console.log(response);
                 //$location.path('/confirmation');
               }
            );
      }

    };

  });
