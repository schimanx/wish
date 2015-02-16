angular.module('wishServices', ['ngResource'])
    .factory('Wish', ['$resource',
        function ($resource) {
            var Wish = $resource('http://private-9015-wish1.apiary-mock.com/wishes/:id', {}, {
                'query': {method: 'GET', isArray: true},
                'get': {method: 'GET'},
                'insert': {method: 'POST'},
                'delete': {method: 'DELETE'},
                'update': {method: 'PUT'}
            });
            Wish.createWish = function () {
                return new Wishes({
                    name: '',
                    desc: '',
                    img: '',
                    url: '',
                    price: '',
                    group: '',
                    rating: '',
                    reserved: ''
                });
            };

            return Wish;
        }]);