'use strict';

/**
 * @ngdoc function
 * @name zuxAdminApp.controller:AddapplicantCtrl
 * @description
 * # AddapplicantCtrl
 * Controller of the zuxAdminApp
 */
angular.module('zuxAdminApp')
  .controller('AddApplicantCtrl', ['$scope', function ($scope) {
    $scope.toggleDatePicker = function () {
      $scope.setDatePickerOpen(!$scope.isDatePickerOpen);
    };

    $scope.setDatePickerOpen = function (isOpen) {
      $scope.isDatePickerOpen = isOpen;
    };
  }]);
