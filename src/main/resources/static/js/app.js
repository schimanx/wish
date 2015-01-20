angular.module('wishApp', [
    'ngRoute',
    'ngAnimate',
    'wishControllers',
    'wishServices',
    'angular-loading-bar'
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
            if (rating > 8) {
                return "progress-bar-danger";
            } else if (rating > 6) {
                return "progress-bar-warning";
            } else if (rating > 4) {
                return "progress-bar-success";
            } else if (rating > 2) {
                return "progress-bar-info";
            } else {
                return "";
            }
        };
    });