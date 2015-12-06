angular.module('webApp', [
    'ui.router'
])
.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('main', {
            url: '/',
            views: {
                '': {
                    templateUrl: './main/main.html',
                    controller: 'MainController as main'
                }
            }
        })
        .state('css', {
            url: '/css',
            views: {
                '': {
                    controller: 'MainController',
                    templateUrl: './main/css.html'
                }
            }
        });
}]);
