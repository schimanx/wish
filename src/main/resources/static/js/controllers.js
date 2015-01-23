angular.module('wishControllers', [])
    .controller('WishesController', ['$scope', 'Wish',
        function ($scope, Wish) {
            $scope.wishes = Wish.query();
            $scope.order = '-rating';
            $scope.reverse = false;

            $scope.delete = function (item) {
                Wish.delete({id: item.id}, function (success) {
                    var idx = $scope.wishes.indexOf(item);
                    $scope.wishes.splice(idx, 1);
                });
            };
        }])
    .controller('WishController', ['$scope', '$routeParams', 'Wish',
        function ($scope, $routeParams, Wish) {
            if ($routeParams.wishId != null) {
                $scope.wish = Wish.get({id: $routeParams.wishId}, function (wish) {
                    $('#star-rating').rating('update', wish.rating);
                });
            }
        }]);