angular.module('wishServices', ['ngResource'])
    .factory('Wish', ['$resource', '$rootScope',
        function ($resource, $rootScope) {
            var Wish = $resource('http://private-9015-wish1.apiary-mock.com/wishes/:id', {}, {
                'query': {method: 'GET', isArray: true},
                'get': {method: 'GET'},
                'insert': {method: 'POST'},
                'delete': {method: 'DELETE'},
                'update': {method: 'PUT'}
            });
            Wish.createWish = function () {
                return new Wish({
                    name: '',
                    desc: '',
                    img: '',
                    url: '',
                    price: null,
                    group: null,
                    rating: 3,
                    reserved: null
                });
            };

            Wish.getById = function (id) {
                return $rootScope.wishes.filter(function (obj) {
                    return obj.id == id;
                })[0];
            };

            return Wish;
        }]).factory('Group', ['$resource', '$rootScope',
        function ($resource, $rootScope) {
            var Group = $resource('http://private-9015-wish1.apiary-mock.com/wishes/groups/:id', {}, {
                'query': {method: 'GET', isArray: true},
                'get': {method: 'GET'},
                'insert': {method: 'POST'},
                'delete': {method: 'DELETE'},
                'update': {method: 'PUT'}
            });

            Group.getById = function (id) {
                return $rootScope.groups.filter(function (obj) {
                    return obj.id == id;
                })[0];
            };

            return Group;
        }]);