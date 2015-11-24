'use strict';

/**
 * @ngdoc function
 * @name zuxAdminApp.controller:ApplicantsCtrl
 * @description
 * # ApplicantsCtrl
 * Controller of the zuxAdminApp
 */
angular.module('zuxAdminApp')
  .controller('ApplicantsCtrl', ['$scope','Applicants', function ($scope, Applicants) {
    $scope.applicants = Applicants.query();
  }]);
