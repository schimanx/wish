var wishServices = angular.module('wishServices', ['ngResource']);

wishServices.factory('Wish', ['$resource',
    function($resource){
        return $resource('http://private-9015-wish1.apiary-mock.com/wishes/:wishId', {}, {
            query: {method:'GET', params:{}, isArray:true},
            get: {method:'GET', params:{wishId:''}, isArray:false}
        });
    }]);