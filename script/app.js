var CardGameApp = angular.module('CardGameApp', ['ngRoute']);



CardGameApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

    $routeProvider.
            when('/', {
                templateUrl: 'partial/welcome.html'
            }).when('/card', {
                templateUrl: 'partial/cardgame.html',
                controller: 'CardGameController'
            }).otherwise({
                redirectTo: '/'
            });
}]);