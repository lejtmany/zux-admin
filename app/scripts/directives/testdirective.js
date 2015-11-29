'use strict';

/**
 * @ngdoc directive
 * @name zuxAdminApp.directive:testDirective
 * @description
 * # testDirective
 */
angular.module('zuxAdminApp')
  .directive('testDirective', function () {
    return {
      template: '<div>{{message}}</div><span ng-bind="myModel"></span>',
      restrict: 'E',
      scope:{ 
        message:'@',
        myModel:'='
      },
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
