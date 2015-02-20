define(['app/protected/tabs/config',
        'app/protected/tabs/services/tabDetail',
        'app/protected/tabs/services/tabList',
        'app/protected/tabs/controller/tabController'
    ],
    function(config, tabDetail, tabList, tabController){
        'use strict';

        var tabsApp = angular.module('tabsApp', ['ngRoute', 'ngResource']);

        tabsApp.config(config);

        tabsApp.factory('tabDetail',tabDetail);
        tabsApp.factory('tabList',tabList);


        tabsApp.controller('tabController', tabController);
});

