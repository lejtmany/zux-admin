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
      template: '<div class="tagsinput-primary"><select class="tagsinput" type="tagsinput" value="Taking walks" name={{name}} ng-model="ngModel" ng-minlength={{ngMinlength}} ng-maxlength={{ngMaxlength}} ng-required={{ngRequired}} multiple></div>',
      restrict: 'E',
      scope: {
        ngModel: '=',
        name: '@',
        ngMinlength: '=',
        ngMaxlength: '=',
        ngRequired: '@'
      },
      require: 'ngModel',

      link: function link(scope, element, attrs, ctrl) {
        
        element.find(".tagsinput").tagsinput({
          maxTags: scope.ngMaxlength
        });
        
        if (scope.ngRequired === undefined)
          scope.ngRequired = false;

       //if no tags set model to null so isn't marked invalid because not min length
        element.find(".tagsinput").on('itemRemoved', function (event) {
          scope.$apply(function () {
            if (scope.ngModel.length === 0)
              scope.ngModel = null;
          })
        });
        
      }
    };
  });
