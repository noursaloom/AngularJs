var app = angular
    .module("myModule", [])
    .controller("myController", function ($scope, $http,$log) {

        $http({
            methos: 'GET',
            url: "EmployeeService.asmx/GetAllEmployees"
        })
            .then(function (response) {
                $scope.employees = response.data;
                $log.info(response);
            }, function (response) {
                    $scope.error = response.data;
                    $log.info(response);
            }
        );
    });