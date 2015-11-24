'use strict';

/**
 * @ngdoc function
 * @name zuxAdminApp.controller:ApplicantdetailCtrl
 * @description
 * # ApplicantdetailCtrl
 * Controller of the zuxAdminApp
 */
angular.module('zuxAdminApp')
  .controller('ApplicantDetailCtrl', ['$scope', '$stateParams', 'Applicants', function ($scope, $stateParams, Applicants) {
   
    Applicants.get({ id: $stateParams.applicantId }, function (data) {
      $scope.applicant = data;
    });
    $scope.deleteApplicant = function () {
      Applicants.delete({ id: $scope.applicant._id }, function () {
      });
    
    };
  }]);
