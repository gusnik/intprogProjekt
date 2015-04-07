
var movieDataApp = angular.module('movieData', ['ngRoute','ngResource', 'ngCookies']);

dinnerPlannerApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html'
      }).
      when('/search', {
        templateUrl: 'partials/search.html',
        controller: 'SearchCtrl'
      }).
      when('/dish/:dishId', {
        templateUrl: 'partials/dish.html',
        controller: 'DishCtrl'
      }).
      when('/checkout', {
        templateUrl: 'partials/checkout.html',
        controller: 'CheckCtrl'
      }).
      when('/final-page', {
        templateUrl: 'partials/final-page.html',
        controller: 'FinalCtrl'
      }).
      // TODO in Lab 5: add more conditions for the last two screens (overview and preparation)
      otherwise({
        redirectTo: '/home'
      });
  }]);