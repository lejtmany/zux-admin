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

      link: function postLink(scope, element, attrs, ctrl) {
        element.find(".tagsinput").tagsinput();
        if(scope.ngRequired === undefined)
            scope.ngRequired = false;

        // function lengthValidator(model){
        //   if(model.length === 5){
        //     ctrl.$setValidity('lengthValidator', true);
        //   }
        //   else{
        //     ctrl.$setValidity('lengthValidator', false);            
        //   }
          
        //   return model;
        // }
        
        // ctrl.$parsers.push(lengthValidator);
      }
    };
  });
