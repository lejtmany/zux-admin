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
       templateUrl:'views/gen_views/main.html'
     });
  })
  
  .factory('Resumes', ['$resource', function($resource){
      return $resource('http://localhost:3000/applicants/:resumeId', {}, {
        // query:{method:'GET', isArray:true}
      });
  }]);
