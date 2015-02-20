define([], function(app){
    'use strict';

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