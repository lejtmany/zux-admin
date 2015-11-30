'use strict';

/**
 * @ngdoc directive
 * @name zuxAdminApp.directive:tagsInput
 * @description
 * # tagsInput
 */
angular.module('zuxAdminApp')
  .directive('tagsInput', function () {
    return {
      template: '<div class="tagsinput-primary"><select class="tagsinput" type="tagsinput" value="Taking walks" name="tagsinput" ng-model="ngModel" multiple></div>',
      restrict: 'E',
      scope:{
        ngModel: '='
      },      
      link: function postLink(scope, element, attrs) {
        element.find(".tagsinput").tagsinput();
      }
    };
  });
