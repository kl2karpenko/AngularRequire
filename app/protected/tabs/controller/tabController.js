define([], function() {
    'use strict';

    function tabController($scope, tabList, tabDetail, $routeParams) {
        $scope.tabs = tabList.query();

        var tabId = !$routeParams.tabId ? "first" : $routeParams.tabId;
        $scope.active = tabId;
        $scope.detail = tabDetail.get({tabId: tabId});
    }

    tabController.$inject=['$scope','tabList','tabDetail','$routeParams'];

    return tabController;
});