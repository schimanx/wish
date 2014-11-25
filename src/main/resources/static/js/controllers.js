var wishControllers = angular.module('wishControllers', []);

wishControllers.controller('WishesCtrl', ['$scope', 'Wish',
    function ($scope, Wish) {
        $scope.wishes = Wish.query();
    }]);

wishControllers.controller('WishCtrl', ['$scope', '$routeParams', 'Wish',
    function ($scope, $routeParams, Wish) {
        $scope.wish = Wish.get({wishId: $routeParams.wishId});
    }]);