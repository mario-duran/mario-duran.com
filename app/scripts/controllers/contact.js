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
    $scope.submitting = false;
    $scope.sendText = 'Send Message';
    $scope.sentSuccess = false;
    $scope.sentError = false;

    $scope.contactInfo = {
      name:{
        value:'',
        error:false,
      },
      email:{
        value:'',
        error:false,
      },
      message:{
        value:'',
        error:false,
      }
    };

    var setErrorFalse = function() {
      $scope.contactInfo.name.error = $scope.contactInfo.email.error = $scope.contactInfo.message.error = false;
    };

    var resetForm = function() {
      $scope.submitting = false;
      $scope.sendText = 'Send Message';
      $scope.contactInfo.name.value = $scope.contactInfo.email.value = $scope.contactInfo.message.value = '';
    };

    $scope.sendMessage = function() {
      $scope.$broadcast('show-errors-check-validity'); //BRODACAST TO LET THE showErrors DIRECTIVE WHEN TO DISPLAY ERRORS
      $scope.submitting = true;
      $scope.sendText = 'Sending...';
      setErrorFalse();

      if (!$scope.contactForm.$valid) {
        //ERRORS
        $scope.contactInfo.name.error = $scope.contactForm.name.$invalid;
        $scope.contactInfo.email.error = $scope.contactForm.email.$invalid;
        $scope.contactInfo.message.error = $scope.contactForm.message.$invalid;

        $scope.submitting = false;
        $scope.sendText = 'Send Message';

      } else {
        $scope.submitting = true;
        var config = {
              headers : {
                  'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
              }
          };

        var dataContent = 'dataContent=' + JSON.stringify($scope.contactInfo);

        $http.post('contact_me.php', dataContent, config)
           .then(
               function(response){
                 if(response.data.message==='sent OK') {
                   $scope.sentSuccess = true;
                 } else {
                   $scope.sentError = true;
                 }
                 resetForm();
               },
               function(response){
                 // failure callback
                 console.log(response);
                 $scope.sentError = true;
                 resetForm();

               }
            );
      }

    };

  });
