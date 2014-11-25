var wishApp = angular.module('wishApp', [
    'ngRoute',
    'wishControllers'
]);

wishApp.config(['$routeProvider',
    function($routeProvider) {
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