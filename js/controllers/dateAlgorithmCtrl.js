/**
 * Created by fei on 14/10/16.
 */
'use strict';
angular.module('veeva').controller('dateAlgorithmCtrl', ['dateUtils',
    function (dateUtils) {
        var vm = this;
        vm.time = {};

        vm.btns = function () {
            vm.time.number = (function () {
                var num;
                var yearStr = vm.time.year,
                    monthStr = vm.time.month,
                    dayStr = vm.time.day,
                    leapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                    disleapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                if (yearStr % 4 === 0) {
                    leapYear.length = monthStr - 1;

                    num = leapYear.length == 0 ? leapYear : leapYear.reduce(function (prev, cur) {
                        return prev + cur
                    });
                    num = num + dayStr;
                    console.log("閏年")
                } else {
                    disleapYear.length = monthStr - 1;
                    num = disleapYear.length ==0 ? disleapYear : disleapYear.reduce(function (prev, cur) {
                        return prev + cur
                    });
                    num = num + dayStr;
                }

                console.log(num);
                return num;
            })();
        };


    }]);
