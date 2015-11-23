angular.module('webApp')
    .controller('MainController', function($scope) {

        $scope.$on('toMain', function(event, data) {
            $scope.name = event.name + '=>' + data;
        });

        if(!$scope.$root.value) {
            $scope.$root.value = 1;
        }

        this.clickBtn = function() {
            console.log('hello form constructor!');
        };


    });
