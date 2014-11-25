var wishControllers = angular.module('wishControllers', []);

wishControllers.controller('WishesCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('http://private-9015-wish1.apiary-mock.com/wishes').success(function(data) {
            $scope.wishes = data;
        });
    }]);

wishControllers.controller('WishCtrl', ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {
        $http.get('http://private-9015-wish1.apiary-mock.com/wishes/' + $routeParams.wishId).success(function(data) {
            $scope.wish = data;
        });
    }]);