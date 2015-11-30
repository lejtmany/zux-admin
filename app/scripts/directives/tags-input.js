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
      template: '<div class="tagsinput-primary"><input class="tagsinput" type="tagsinput" value="Taking walks" name="tagsinput"></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.find(".tagsinput").tagsinput();
      }
    };
  });
