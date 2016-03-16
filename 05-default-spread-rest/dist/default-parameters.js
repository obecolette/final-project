'use strict';

module.exports = function () {

    'use strict';

    // ES5 defaults

    var oldGreeting = function oldGreeting(name) {

        var defaultGreeting = 'brave new world';
        var greetingSuffix = name === undefined ? defaultGreeting : name;

        if (typeof name === 'function') {
            greetingSuffix = name();
        }

        return 'Hello, ' + greetingSuffix + '!';
    };

    // ES6 Default Parameters

    var greeting = function greeting() {
        var name = arguments.length <= 0 || arguments[0] === undefined ? 'brave new world' : arguments[0];


        var result = typeof name === 'function' ? name() : name;
        return 'Hello, ' + result + '!';
    };

    // do not use named parameters here

    var addTwoNumbers = function addTwoNumbers() {

        // set default values here

        var numbaOne = getValueOrDefault(arguments[0], 0);
        var numbaTwo = getValueOrDefault(arguments[1], 0);

        return numbaOne + numbaTwo;
    };

    var complexSequence = function complexSequence(noun) {
        var pluralNoun = arguments.length <= 1 || arguments[1] === undefined ? noun + 's' : arguments[1];
        var action = arguments.length <= 2 || arguments[2] === undefined ? 'fire blasters' : arguments[2];


        return [pluralNoun, action].join(' ');
    };
    // this function is private because we do not export it (via the revealing module pattern below)

    var getValueOrDefault = function getValueOrDefault(currentValue, defaultValue) {

        // http://www.codereadability.com/javascript-default-parameters-with-or-operator/#howtosetdefaultsvaluesinstead

        if (currentValue === undefined) {
            return defaultValue;
        } else {
            return currentValue;
        }
    };

    return {
        greeting: greeting,
        oldGreeting: oldGreeting,
        addTwoNumbers: addTwoNumbers,
        complexSequence: complexSequence
    };
}();