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
        .state('watch', {
            url: '/watch',
            views: {
                '': {
                    templateUrl: './watch/watch.html',
                    controller: 'WatchController as watch'
                }
            }
        });
}]);
