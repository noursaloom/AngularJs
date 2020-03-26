var app = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {

        var employees = [
            { name: "Ben", dateOfbirth: new Date("November 23, 1980"), gender: "Male", salary: 55000 },
            { name: "Sara", dateOfbirth: new Date("May 05, 1970"), gender: "Female", salary: 68000 },
            { name: "Mark", dateOfbirth: new Date("August 15, 1974"), gender: "Male", salary: 57000 },
            { name: "Pam", dateOfbirth: new Date("October 27, 1979"), gender: "Female", salary: 53000 },
            { name: "Todd", dateOfbirth: new Date("December 30, 1983"), gender: "Male", salary: 60000 }
        ];

        $scope.employees = employees;
        $scope.rowlimit = 3;
        $scope.sortColumn = "name";
        $scope.reverseSort = false;

        $scope.sortData = function (column) {
            $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
            $scope.sortColumn = column;
        }

        $scope.getSortClass = function (column) {

            if ($scope.sortColumn == column) {
                return $scope.reverseSort
                    ? 'arrow-down'
                    : 'arrow-up';
            }

            return '';
        }
      

    });
