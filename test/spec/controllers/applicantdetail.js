'use strict';

describe('Controller: ApplicantdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('zuxAdminApp'));

  var ApplicantdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApplicantdetailCtrl = $controller('ApplicantdetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ApplicantdetailCtrl.awesomeThings.length).toBe(3);
  });
});
