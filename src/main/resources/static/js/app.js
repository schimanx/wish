angular.module('wishApp', [
    'ngRoute',
    'ngAnimate',
    'wishControllers',
    'wishServices',
    'wishDirectives',
    'angular-loading-bar'
])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/wishes', {
                    templateUrl: './template/wishes.html',
                    controller: 'WishesController',
                    resolve: {
                        delayedData: function($q, $rootScope) {
                            return $q.all($rootScope.wishes.$promise, $rootScope.groups.$promise)
                        }
                    }
                }).
                when('/wish/:wishId', {
                    templateUrl: './template/wish.html',
                    controller: 'WishController',
                    resolve: {
                        delayedData: function($rootScope) {
                            return $rootScope.wishes.$promise
                        }
                    }
                }).
                when('/wish', {
                    templateUrl: './template/wish.html',
                    controller: 'WishController'
                }).
                otherwise({
                    redirectTo: '/wishes'
                });
        }]).run(function ($rootScope, Wish, Group) {
        if (!angular.isObject($rootScope.wishes)) {
            $rootScope.wishes = Wish.query(function(wishes) {
            });
        }
        if (!angular.isObject($rootScope.groups)) {
            $rootScope.groups = Group.query();
        }
    });
