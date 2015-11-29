'use strict';

describe('Controller: AddapplicantCtrl', function () {

  // load the controller's module
  beforeEach(module('zuxAdminApp'));

  var AddapplicantCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddapplicantCtrl = $controller('AddapplicantCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddapplicantCtrl.awesomeThings.length).toBe(3);
  });
});
