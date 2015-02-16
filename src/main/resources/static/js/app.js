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
        }]);