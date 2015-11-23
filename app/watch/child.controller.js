angular.module('webApp')
    .controller('Child1Controller', function($scope, $http) {
        $scope.$on('Notify', function(event, date) {
            $scope.child1Result = event.name + '=>' + date;
        });

    })
    .controller('Child2Controller', function($scope, $http) {

    });
