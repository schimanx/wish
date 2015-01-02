angular.module('wishApp', [
    'ngRoute',
    'angular-loading-bar',
    'ngAnimate',
    'wishControllers',
    'wishServices'
])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/wishes', {
                    templateUrl: '/template/wishes.html',
                    controller: 'WishesController'
                }).
                when('/wish/:wishId', {
                    templateUrl: '/template/wish.html',
                    controller: 'WishController'
                }).
                when('/wish', {
                    templateUrl: '/template/wish.html',
                    controller: 'WishController'
                }).
                otherwise({
                    redirectTo: '/wishes'
                });
        }])
    .run(function($rootScope) {
        $rootScope.ratingToClass = function (rating) {
            if (rating > 80) {
                return "progress-bar-danger";
            } else if (rating > 60) {
                return "progress-bar-warning";
            } else if (rating > 40) {
                return "progress-bar-success";
            } else if (rating > 20) {
                return "progress-bar-info";
            } else {
                return "";
            }
        };
    });