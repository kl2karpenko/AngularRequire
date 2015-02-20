define([],function(){
    'use strict';

    function config($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '/app/includes/tabs.inc.php',
                controller: 'tabController'
            }).
            when('/:tabId', {
                templateUrl: '/app/includes/tabs.inc.php',
                controller: 'tabController'
            }).
            otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    }

    config.$inject=['$routeProvider', '$locationProvider'];

    return config;
});