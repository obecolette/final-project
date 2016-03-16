'use strict';

// require something here
const defaults = require('../dist/default-parameters');
const greeting = defaults.greeting;
const oldGreeting = defaults.oldGreeting;
const addTwoNumbers = defaults.addTwoNumbers;
// const getValueOrDefault = defaults.getValueOrDefault;

// getValueOrDefault(null, null);

describe('Default Parameters', function () {

    it('uses the default value if one if not supplied', function() {

        expect(greeting()).toEqual('Hello, brave new world!');
        expect(oldGreeting()).toEqual('Hello, brave new world!');
        expect(addTwoNumbers()).toEqual(0);
    });

    it('overrides the default value with the supplied one', function () {

        const greetingSuffix = 'your name here';
        const matcher = /your name here!$/; // ES6 template strings?

        expect(greeting(greetingSuffix)).toMatch(matcher);
        expect(oldGreeting(greetingSuffix)).toMatch(matcher);
    });
    // https://leanpub.com/understandinges6/read#leanpub-auto-functions-with-default-parameter-values
    // Be careful when using function calls as default parameter values. If you forget the parentheses, such as second = getValue in the last example, you are passing a reference to the function rather than the result of the function call.


    it('allows functions to be the default value', function () {

        const myGreeting = () => {

            return 'Coruscant';
        };

        expect(greeting(myGreeting)).toMatch('Coruscant');
        expect(oldGreeting(myGreeting)).toMatch('Coruscant');


    });

    it('allows parameters earlier in the function definition to be used in later parameters', function () {

        expect(defaults.complexSequence('Stormtrooper')).toEqual('Stormtroopers fire blasters');
        expect(defaults.complexSequence('Star Destroyer', undefined, 'fire Turbolasers')).toEqual('Star Destroyers fire Turbolasers');
        expect(defaults.complexSequence(undefined, 'Star Destroyers', 'fire Turbolasers')).toEqual('Star Destroyers fire Turbolasers');
    });
});
