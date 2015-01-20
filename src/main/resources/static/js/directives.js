angular.module('wishApp')
/**
 * A generic confirmation for risky actions.
 * Usage: Add attributes: ng-really-message="Are you sure"? ng-really-click="takeAction()" function
 */
    .directive('ngReallyClick', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.bind('click', function () {
                    var message = attrs.ngReallyMessage;
                    if (message && confirm(message)) {
                        scope.$apply(attrs.ngReallyClick);
                    }
                });
            }
        }
    })
/**
 * Confirm delete directive
 */
    .directive('confirmDelete', function () {
        return {
            replace: true,
            templateUrl: 'template/deleteConfirmation.html',
            scope: {
                onConfirm: '&'
            },
            controller: function ($scope) {
                $scope.isDeleting = false;
                $scope.startDelete = function () {
                    $scope.isDeleting = true;
                }
                $scope.cancel = function () {
                    $scope.isDeleting = false;
                }
                $scope.confirm = function () {
                    $scope.onConfirm();
                    $scope.isDeleting = false;
                }
            }
        }
    });