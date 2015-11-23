'use strict';

/**
 * @ngdoc function
 * @name zuxAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zuxAdminApp
 */
angular.module('zuxAdminApp')
  .controller('MainCtrl', ['$scope','Resumes', function ($scope, Resumes) {
    $scope.resumes = Resumes.query();
    $scope.testArray = ['Lightdog', 'is', 'awesome'];
  }]);
