var APP = angular.module('APP', ['firebase']);

APP.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('<[');
    $interpolateProvider.endSymbol(']>');
});