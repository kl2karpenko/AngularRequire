define(['app/protected/error/config'],
    function(config){
        'use strict';

        var errorApp = angular.module('errorApp', ['ngRoute', 'ngResource']);

        errorApp.config(config);
});
