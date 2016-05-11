'use strict';

describe('Controller: IdeasCtrl', function () {

  // load the controller's module
  beforeEach(module('mdComApp'));

  var IdeasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IdeasCtrl = $controller('IdeasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(IdeasCtrl.awesomeThings.length).toBe(3);
  });
});
