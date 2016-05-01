var myApp = angular.module('myApp',['ui.router','ngResource']);

  myApp
    .config(function($stateProvider,$urlRouterProvider){
      $stateProvider
        .state('home',{
          url:'/home',
          templateUrl:'views/home.html',
          controller:'proCtrl'
          
        })
        .state('property',{
        	url:'/property',
        	'templateUrl':'views/property.html',
            controller:'proCtrl'
        })

        .state('prodetails',{
          url:'/property/:id',
          'templateUrl':'views/proDetails.html',
          controller:'prodCtrl'
        })

        .state('register',{
        	url:'/register',
        	'templateUrl':'views/register.html'
        })

        .state('search',{
          url:'/search',
          'templateUrl':'views/search.html'
        })

        .state('login',{
          url:'/login',
          'templateUrl':'views/login.html'
        })
        $urlRouterProvider.otherwise('/home');
    });