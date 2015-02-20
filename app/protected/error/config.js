define([],function(){
    'use strict';

    function config($routeProvider, $locationProvider) {
        $routeProvider.
            when('/404', {
                templateUrl: '/404.php'
            }).
            otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    }

    config.$inject=['$routeProvider', '$locationProvider'];

    return config;
});