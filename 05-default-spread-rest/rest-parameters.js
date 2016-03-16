module.exports = (function () {

    'use strict';

    const multiply = function (multipler, ...multiplacand) {

        return multiplacand.map( function (currentElement) {

            return multipler * currentElement;
        });
    };

    // es5
    const oldMultiply = function (multipler) {

        // const multiplacand = Array.prototype.slice(arguments, 1, arguments.)
        let multiplacand = Array.apply(null, arguments);
        multiplacand.shift(0);

        return multiplacand.map( function (currentElement) {

            return multipler * currentElement;
        });
    };


    const sum = function () {

        return;
    };


    return {
        multiply,
        oldMultiply,
        sum
    };

})();
