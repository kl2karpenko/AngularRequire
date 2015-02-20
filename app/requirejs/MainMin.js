define('app/protected/tabs/config',[],function(){
    

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
define('app/protected/tabs/services/tabDetail',[], function(app){
    

    function factoryFunc($resource){
        var tabDetail;

        tabDetail = $resource('/app/protected/tabs/data/tabs/:tabId.json', {}, {
            query: {method:'GET', params:{tabId:'tabs'}, isArray:true}
        });

        return tabDetail;
    }

    factoryFunc.$inject=['$resource'];

    return factoryFunc;
});

define('app/protected/tabs/services/tabList',[], function(app){
    

    function factoryFunc($resource){
        var tabList;

        tabList = $resource('/app/protected/tabs/data/tab.json',{}, {
            query: {method:'GET', isArray:true}
        });

        return tabList;
    }

    factoryFunc.$inject=['$resource'];

    return factoryFunc;
});
define('app/protected/tabs/controller/tabController',[], function() {
    

    function tabController($scope, tabList, tabDetail, $routeParams) {
        $scope.tabs = tabList.query();

        var tabId = !$routeParams.tabId ? "first" : $routeParams.tabId;
        $scope.active = tabId;
        $scope.detail = tabDetail.get({tabId: tabId});
    }

    tabController.$inject=['$scope','tabList','tabDetail','$routeParams'];

    return tabController;
});
define('app/protected/tabs/tabsModule',['app/protected/tabs/config',
        'app/protected/tabs/services/tabDetail',
        'app/protected/tabs/services/tabList',
        'app/protected/tabs/controller/tabController'
    ],
    function(config, tabDetail, tabList, tabController){
        

        var tabsApp = angular.module('tabsApp', ['ngRoute', 'ngResource']);

        tabsApp.config(config);

        tabsApp.factory('tabDetail',tabDetail);
        tabsApp.factory('tabList',tabList);


        tabsApp.controller('tabController', tabController);
});


require(['app/protected/tabs/tabsModule'],
    function() {
        
        angular.bootstrap(document, ['tabsApp']);
    }
);
define("main", function(){});

