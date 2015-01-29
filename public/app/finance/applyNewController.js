angular.module("app").controller("applyNewController", ["$scope", "$http", function ($scope, $http) {
    var vm = this;
    vm.apply = {
        interest: 1.8,
        deposit: 1000
    };
    vm.calculate = function () {
        console.log(vm.apply);
        if (vm.apply.amount && vm.apply.lever) {
            vm.apply.deposit = Math.round(vm.apply.amount / vm.apply.lever);
        }
    }

    vm.addNewApply = function () {
        $http.post('/finance/new_apply', vm.apply)
            .success(function(data, status, headers, config) {
                console.log("success " + status);
            }).error(function (data, status, headers, config) {
                console.log("err ");
            });
    };

}]);
