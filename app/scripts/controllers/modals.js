/**
 * Created by chrismorningstar on 9/25/15.
 */
'use strict';

/**
 * @ngdoc function
 * @name kjaApp.controller:modals
 * @description
 * # modals
 * Controller of the kjaApp
 */

angular.module('kjaApp')
    .controller('Controller', function($scope, ModalService){
        $scope.show = function() {
            ModalService.showModal({
                templateUrl: 'modal.html',
                controller: "ModalController"
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    $scope.message = "You said " + result;
                });
            });
        };

    })

    .controller('ModalController', function($scope, close){
        $scope.close = function(result){
            close(result, 500);
        };
});



