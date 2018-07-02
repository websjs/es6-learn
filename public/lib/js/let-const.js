"use strict";

var _letConstData = require("./let-const-data.js");

var _letConstData2 = _interopRequireDefault(_letConstData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

{
    [1, 2, 4].forEach(function (val, index) {
        console.log(val, index);
    });
    setTimeout(function () {
        console.log(_letConstData2.default);
    }, 100);
    console.log(_letConstData2.default);
}