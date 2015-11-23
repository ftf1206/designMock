angular.module('webApp')
    .controller('MyController', function($scope, $http, $rootScope) {
        $scope.onemit = function() {
            $scope.$emit('Notify');
        };

        $scope.onbroad = function() {
            $scope.$broadcast('Notify', new Date());
        };

    });
