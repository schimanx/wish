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
    .controller('WishController', ['$scope', '$routeParams', '$location', 'Wish',
        function ($scope, $routeParams, $location, Wish) {
            if ($routeParams.wishId != null) {
                Wish.get({id: $routeParams.wishId}, function (wish) {
                    $scope.wish = wish;
                    $('#star-rating').rating('update', wish.rating);
                });
            } else {
                $scope.wish = Wish.createWish();
            }

            $('#star-rating').on('rating.change', function(event, value) {
                $scope.wish.rating = Number(value);
            });

            $scope.save = function() {
                if ($routeParams.wishId != null) {
                    $scope.wish.$update({id: $routeParams.wishId}, function() {
                        $location.path('wishes');
                    });
                } else {
                    $scope.wish.$insert(function() {
                        $location.path('wishes');
                    });
                }
            }
        }]);