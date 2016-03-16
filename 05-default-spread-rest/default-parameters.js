module.exports = (function () {

    'use strict';

    // ES5 defaults

    const oldGreeting = function (name) {

        const defaultGreeting = 'brave new world';
        let greetingSuffix = name === undefined ? defaultGreeting : name;

        if (typeof name === 'function') {
            greetingSuffix = name();
        }

        return 'Hello, ' + greetingSuffix + '!';
    };

    // ES6 Default Parameters

    const greeting = function (name='brave new world') {

        const result = typeof name === 'function' ? name() : name;
        return 'Hello, ' + result + '!';
    };


    // do not use named parameters here

    const addTwoNumbers = function () {

        // set default values here

        const numbaOne = getValueOrDefault(arguments[0], 0);
        const numbaTwo = getValueOrDefault(arguments[1], 0);

        return numbaOne + numbaTwo;
    };

    const complexSequence = function (noun, pluralNoun = noun + 's', action = 'fire blasters') {

        return [pluralNoun, action].join(' ');
    };
    // this function is private because we do not export it (via the revealing module pattern below)

    const getValueOrDefault = function(currentValue, defaultValue) {

        // http://www.codereadability.com/javascript-default-parameters-with-or-operator/#howtosetdefaultsvaluesinstead

        if (currentValue === undefined) {
            return defaultValue;
        } else {
            return currentValue;
        }
    };




    return {
        greeting,
        oldGreeting,
        addTwoNumbers,
        complexSequence
    };

})();
