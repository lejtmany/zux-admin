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
      template: '<div ng-class="{\'tagsinput-primary\':{{primaryTheme}}}"><select class="tagsinput" type="tagsinput" value="Taking walks" name={{name}} ng-model="ngModel" ng-minlength={{ngMinlength}} ng-maxlength={{ngMaxlength}} ng-required={{ngRequired}} multiple></div>',
      restrict: 'AE',
      scope: {
        ngModel: '=',
        name: '@',
        ngMinlength: '=',
        ngMaxlength: '=',
        ngRequired: '@',
        primaryTheme: '@'
      },
      require: 'ngModel',

      compile: function compile(tElement, tAttrs) {

        if (tAttrs.ngRequired === undefined)
          tAttrs.ngRequired = false;

          
        return {
          pre: function preLink(scope, element, attrs, ctrl) {

            element.find(".tagsinput").tagsinput({
              maxTags: scope.ngMaxlength
            });

            //if no tags set model to null so isn't marked invalid because not min length
            element.find(".tagsinput").on('itemRemoved', function (event) {
              scope.$apply(function () {
                if (scope.ngModel.length === 0)
                  scope.ngModel = null;
              })
            });

          }

        };
      }

    };
  });
