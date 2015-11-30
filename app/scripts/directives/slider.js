'use strict';

/**
 * @ngdoc directive
 * @name zuxAdminApp.directive:slider
 * @description
 * # slider
 */
angular.module('zuxAdminApp')
  .directive('slider', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.slider();
      }
    };
  });
