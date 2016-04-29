var myApp = angular.module('myApp',['ui.router']);

  myApp
    .config(function($stateProvider,$urlRouterProvider){
      $stateProvider
        .state('app',{
          url:'/home',
          templateUrl:'views/home.html',
          
        });
        $urlRouterProvider.otherwise('/home');
    });