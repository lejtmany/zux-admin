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
        templateUrl: 'views/gen_views/about.html'
      }
        )
     .state('main', {
       url:'/main',
       templateUrl:'views/gen_views/main.html',
       controller: 'MainCtrl'
     })
     .state('applicants', {
        url:'/applicants',
        templateUrl:'views/gen_views/applicants.html',
        controller:'ApplicantsCtrl'
     })
     .state('applicantDetail', {
        url:'/applicants/:applicantId',
        templateUrl:'views/gen_views/applicantDetail.html',
        controller: 'ApplicantDetailCtrl'
     });
  })
  
  .factory('Applicants', ['$resource', function($resource){
      return $resource('http://localhost:3000/applicants/:id', {}, {});
  }]);
