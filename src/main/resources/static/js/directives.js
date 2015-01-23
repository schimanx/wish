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
    })

    .directive("starRating", function () {
        return {
            replace: true,
            restrict: "E",
            template: "<input type='number' class='rating' min='0' max='5' " +
            "step='1' data-stars='5' data-show-clear='false' data-min='0' data-max='5' " +
            "data-step='1'>",
            scope: {
            },
            link: function (scope, elem, attrs) {
                scope.$watch('wishes', function(){
                    $('#' + attrs.id).rating({
                        starCaptions: {1: "Udělá radost", 2: "Líbí se", 3: "Přeji si", 4: "Chci", 5: "Musím mít"},
                        starCaptionClasses: {
                            1: "label label-primary",
                            2: "label label-info",
                            3: "label label-success",
                            4: "label label-warning",
                            5: "label label-danger"
                        }
                    });
                });
            }
        }
    });