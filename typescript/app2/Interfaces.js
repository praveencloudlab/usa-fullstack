var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.calculation = function (n1, n2) {
        return n1 + n2;
    };
    return MyClass;
}());
var sum = {
    calculation: function (n1, n2) {
        return n1 + n2;
    }
};
var diff = {
    calculation: function (n1, n2) {
        return n1 - n2;
    }
};
console.log(sum.calculation(100, 200));
console.log(diff.calculation(40, 10));
