var app = angular.module("myModule", []);
app.controller("myController", function ($scope, $http,$log) {

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
app.controller("countryController",
    function ($scope, $location, $anchorScroll, $http) {
        $http.get("CountryService.asmx/GetData")
            .then(function (response) {
                $scope.countries = response.data;
            });

        $scope.scrollTo = function (countryName) {
            $location.hash(countryName);
            $anchorScroll();
        }
    });