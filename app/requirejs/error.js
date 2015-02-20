define('app/protected/error/config',[],function(){
    

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
define('app/protected/error/redirectModule',['app/protected/error/config'],
    function(config){
        

        var errorApp = angular.module('errorApp', ['ngRoute', 'ngResource']);

        errorApp.config(config);
});

require(['app/protected/error/redirectModule'],
    function() {
        
        angular.bootstrap(document, ['errorApp']);
    }
);
define("error", function(){});

