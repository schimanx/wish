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
                    controller: 'WishesCtrl'
                }).
                when('/wish/:wishId', {
                    templateUrl: '/template/wish.html',
                    controller: 'WishCtrl'
                }).
                otherwise({
                    redirectTo: '/wishes'
                });
        }]);