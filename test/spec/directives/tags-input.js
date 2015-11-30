'use strict';

describe('Directive: tagsInput', function () {

  // load the directive's module
  beforeEach(module('zuxAdminApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tags-input></tags-input>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tagsInput directive');
  }));
});
