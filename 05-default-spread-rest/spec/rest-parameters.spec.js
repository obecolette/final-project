'use strict';

const restParams = require('../dist/rest-parameters');


describe('Rest Parameters', function () {

    beforeEach(function() {

        this.multiply = restParams.multiply;
        this.oldMultiply = restParams.oldMultiply;
        this.sum = restParams.sum;
    });

    it('allows us to represent an indefinite number of arguments as an array', function() {

        let result = this.multiply(2, 2, 4, 6, 8);
        let es5result = this.oldMultiply(2, 2, 4, 6, 8);
        expect(result).toEqual([4, 8, 12, 16]);
        expect(es5result).toEqual([4, 8, 12, 16]);
    });

    // The rest parameter is only valid as the last parameter of a function.
    // http://tc39wiki.calculist.org/es6/rest-parameters/

    it('can be the only parameter, or the last');

    it('calculates the length of the arguments without the rest parameter');

});
