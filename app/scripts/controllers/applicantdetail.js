'use strict';

/**
 * @ngdoc function
 * @name zuxAdminApp.controller:ApplicantdetailCtrl
 * @description
 * # ApplicantdetailCtrl
 * Controller of the zuxAdminApp
 */
angular.module('zuxAdminApp')
  .controller('ApplicantDetailCtrl', ['Applicants', '$stateParams', '$state', '$scope', function (Applicants, $stateParams, $state, $scope) {

    Applicants.get({ id: $stateParams.applicantId }, function (data) {
      $scope.applicant = data;
    });

    $scope.deleteApplicant = function () {
      Applicants.delete({ id: $scope.applicant._id });
      $state.go('applicants');
    };
  }]);
