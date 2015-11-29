'use strict';

/**
 * @ngdoc overview
 * @name zuxAdminApp
 * @description
 * # zuxAdminApp
 *
 * Main module of the application.
 */
angular
  .module('zuxAdminApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('main');
    
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
      }
        )
     .state('main', {
       url:'/main',
       templateUrl:'views/main.html',
       controller: 'MainCtrl'
     })
     .state('applicants', {
        url:'/applicants',
        templateUrl:'views/applicants.html',
        controller:'ApplicantsCtrl'
     })
     .state('addApplicant', {
       url:'/addApplicant',
       templateUrl:'views/addapplicant.html',
       controller:'AddApplicantCtrl'
     })
     .state('applicantDetail', {
        url:'/applicants/:applicantId',
        templateUrl:'views/applicantDetail.html',
        controller: 'ApplicantDetailCtrl'
     });
  })
  
  .factory('Applicants', ['$resource', function($resource){
      return $resource('http://localhost:3000/applicants/:id', {}, {});
  }]);
