/**
 * Created by fei on 14/10/16.
 */
'use strict';
app.factory('dateUtils', function () {
    return {
        dateUtils:function (monthStr,dayStr) {
            alert("a");
            var num= (275*monthStr)/9 - (dayStr+9)/12 + dayStr - 30;
            console.log(num);
            return num;
        }
    }


});
