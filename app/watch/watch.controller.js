angular.module('webApp')
    .controller('WatchController', function($scope, $rootScope, $http, $window, $timeout) {
        //位置情報を定期的に取得(成功コールバック関数)
        $window.navigator.geolocation.watchPosition(
            //取得に成功した場合の処理
            function(pos) {
                    $timeout(function() {
                        console.log('success');
                        $scope.latitude = pos.coords.latitude;
                        $scope.longitude = pos.coords.longitude;
                    });
            },
            //取得に失敗した時の処理
            function(e) {
                $window.alert(e.message);
            }
        );

        //$watchによるスコープ監視イベント
        $scope.base = 0;
        $scope.height = 0;
        $scope.area = 0;

        $scope.$watchGroup(['base', 'height'], function(newValue, oldValue, scope) {
            scope.area = scope.base * scope.height / 2 ;
        });

        $scope.stop = function() {
            $scope.cancel();
        };

    });
