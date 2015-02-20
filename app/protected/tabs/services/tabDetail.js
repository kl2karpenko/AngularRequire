define([], function(app){
    'use strict';

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
