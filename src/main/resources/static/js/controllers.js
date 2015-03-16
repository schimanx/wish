angular.module('wishControllers', [])
    .controller('WishesController', ['$rootScope', '$scope', 'Wish', 'Group',
        function ($rootScope, $scope, Wish, Group) {
            $scope.order = '-rating';
            $scope.reverse = false;

            $scope.delete = function (item) {
                Wish.delete({id: item.id}, function (success) {
                    var idx = $rootScope.wishes.indexOf(item);
                    $rootScope.wishes.splice(idx, 1);
                });
            };

            $scope.getGroup = function(id) {
                return Group.getById(id);
            };
        }])
    .controller('WishController', ['$rootScope', '$scope', '$routeParams', '$location', 'Wish', 'Group',
        function ($rootScope, $scope, $routeParams, $location, Wish) {

            if ($routeParams.wishId != null) {
                $scope.wish = Wish.getById($routeParams.wishId);
                $('#star-rating').rating('update', $scope.wish.rating);
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
                    $scope.wish.$insert(function(wish) {
                        $rootScope.wishes.push(wish);
                        $location.path('wishes');
                    });
                }
            };

        }]);