var wishControllers = angular.module('wishControllers', []);

wishControllers.controller('WishesCtrl', ['$scope', 'Wish',
    function ($scope, Wish) {
        $scope.wishes = Wish.query();
        $scope.order = 'rating';
        $scope.reverse = true;

        $scope.ratingToClass = function(rating) {
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
        }
    }]);

wishControllers.controller('WishCtrl', ['$scope', '$routeParams', 'Wish',
    function ($scope, $routeParams, Wish) {
        $scope.wish = Wish.get({wishId: $routeParams.wishId});
    }]);