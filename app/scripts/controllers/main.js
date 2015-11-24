'use strict';

/**
 * @ngdoc function
 * @name zuxAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zuxAdminApp
 */
angular.module('zuxAdminApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.testArray = ['Lightdog', 'is', 'awesome'];
  }]);
