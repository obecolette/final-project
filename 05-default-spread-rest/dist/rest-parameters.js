'use strict';

module.exports = function () {

    'use strict';

    var multiply = function multiply(multipler) {
        for (var _len = arguments.length, multiplacand = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            multiplacand[_key - 1] = arguments[_key];
        }

        return multiplacand.map(function (currentElement) {

            return multipler * currentElement;
        });
    };

    // es5
    var oldMultiply = function oldMultiply(multipler) {

        // const multiplacand = Array.prototype.slice(arguments, 1, arguments.)
        var multiplacand = Array.apply(null, arguments);
        multiplacand.shift(0);

        return multiplacand.map(function (currentElement) {

            return multipler * currentElement;
        });
    };

    var sum = function sum() {

        return;
    };

    return {
        multiply: multiply,
        oldMultiply: oldMultiply,
        sum: sum
    };
}();