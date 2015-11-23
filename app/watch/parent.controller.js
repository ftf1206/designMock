angular.module('webApp')
    .controller('ParentController', function($scope, $http) {
        $scope.$on('Notify', function(event) {
            $scope.parentResult = event.name + '=>' +  event.targetScope.message;
        });

    });
