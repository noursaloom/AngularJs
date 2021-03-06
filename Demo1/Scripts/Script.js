/// <reference path="angular.min.js" />

var app = angular
    .module("myModule", [])
    .controller("myController", function ($scope, stringService) {
      //  Create custom service
        $scope.transformString = function (input) {
            $scope.output = stringService.processString(input);
        };
   
        var employees = [
            { name: "Ben", dateOfbirth: new Date("November 23, 1980"), gender: 1, salary: 55000, city: "London" },
            { name: "Sara", dateOfbirth: new Date("May 05, 1970"), gender: 2, salary: 68000, city: "Chennai"  },
            { name: "Mark", dateOfbirth: new Date("August 15, 1974"), gender: 1, salary: 57000, city: "London"  },
            { name: "Pam", dateOfbirth: new Date("October 27, 1979"), gender: 1, salary: 53000, city: "Chennai"  },
            { name: "Todd", dateOfbirth: new Date("December 30, 1983"), gender: 3, salary: 60000, city: "Chennai"  }
        ];

        $scope.employees = employees;
        $scope.employeeView = "EmployeeTable.html";
        $scope.rowlimit = 5;
        $scope.sortColumn = "name";
        $scope.reverseSort = false;
        //****************Sorting column by click on column header**********************//
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
      
        //****************Filtering  table by multiple properties - name and city**********************//
        $scope.search = function (item) {
            if ($scope.searchText == undefined) {
                return true;
            }
            else {
                if (item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                    item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
                    return true;
                }
            }

            return false;
        }
        
    });
