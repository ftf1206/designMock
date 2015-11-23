angular.module('webApp')
    .controller('RootController', function($scope) {

        $scope.$on('rootChange', function(e, data) {
            console.log('Hello');
        });

    });
