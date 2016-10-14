/**
 * Created by fei on 14/10/16.
 */
'use strict';
angular.module('veeva').controller('dateAlgorithmCtrl', ['dateUtils',
    function (dateUtils) {
        var vm = this;
    vm.time={};
     // vm.time.month=new Number();
     // vm.time.day=new Number();
        // vm.time.number
        console.log(vm.time.day);
        vm.btns=function (monthStr,dayStr) {
            vm.time.number=(function (monthStr,dayStr) {
                alert("a");
                var num= (275*monthStr)/9 - (dayStr+9)/12 + dayStr - 30;
                console.log(num);

                return num;
            })();
            console.log(vm.time.number);
        };



}]);
