'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Prime = function () {

        // starting with a base array of known primes
        function Prime() {
                var known_primes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [2, 3, 5, 7];

                _classCallCheck(this, Prime);

                //keep an array of known primes which keeps incereasing as we find knew primes, 
                // this would reduce the time it takes to generate subsequent series of primes
                this.known_primes = known_primes;

                //save the length of the known_primes array so if the new sequence is shorter we need not generate it again
                this.primes_count = known_primes.length;

                //saving the largest prime gotten would help in determining the bounds 
                //for the trial division methodof finding primes as would be shown
                this.largest_prime = known_primes[this.primes_count - 1];
        }

        _createClass(Prime, [{
                key: 'is_prime',
                value: function is_prime() {
                        var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;


                        // no need to test for primality if input isnt a number
                        if (typeof num !== 'number') {
                                throw new Error("The input parameter must be a positive integer");
                        }

                        //test the number for known primes
                        if (num <= 1) {
                                return false;
                        }

                        //check if the number is one of the known primes
                        else if (this.known_primes.includes(num)) {
                                        return true;
                                }

                                //2 is the only prime even number
                                else if (num % 2 == 0) {
                                                return false;
                                        }

                        var numRoot = Math.sqrt(num);

                        // if the square root of the number is an integer then the number is not  a prime
                        if (parseInt(numRoot) === numRoot) {

                                return false;
                        }

                        numRoot = parseInt(numRoot);

                        // for testing primality of a number, you check if it is divisible by other primes 
                        // before it cause most other numbers are multiples of them
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                                for (var _iterator = this.known_primes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                        var prime = _step.value;


                                        if (num % prime == 0) {
                                                return false;
                                        }

                                        //we want the for loop to run until we hit the square root of the number or
                                        //or we go to the second loop below otherwise
                                        if (prime >= numRoot) {

                                                return true;
                                        }
                                }

                                //this block runs only if the square root of the number is larger than the largest prime found and strored previously
                                //we put the upperbound at the square root cause a number is a multiple of two integers where 
                                //at least one of it is equal to or less than its square root; i.e one of its factor must be equal to or less than its square root
                        } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                        } finally {
                                try {
                                        if (!_iteratorNormalCompletion && _iterator.return) {
                                                _iterator.return();
                                        }
                                } finally {
                                        if (_didIteratorError) {
                                                throw _iteratorError;
                                        }
                                }
                        }

                        for (var i = this.largest_prime; i < numRoot; i++) {

                                if (num % i == 0) {
                                        return false;
                                }
                        }

                        return true;
                }
        }, {
                key: 'generate_primes_till',
                value: function generate_primes_till() {
                        var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;


                        var primes = [];

                        // input should be a positive integer only
                        if (typeof num !== 'number') {
                                throw new Error("The input parameter must be a positive integer");
                        }

                        //return empty array if the number of primes requested is not up to 1
                        if (num < 1) {

                                return primes;
                        }

                        //if number of primes to be gotten is less than length or array of known_primes we return the primes by slicing the array
                        if (num < this.primes_count) {
                                primes = [].concat(_toConsumableArray(this.known_primes));
                                primes = primes.splice(0, num);
                                return primes;
                        }

                        if (num === this.primes_count) {

                                primes = [].concat(_toConsumableArray(this.known_primes));
                                return primes;
                        }

                        //we initailize the for loop to start from the next odd number and to only consider odd numbers
                        for (var i = this.largest_prime + 2; this.primes_count < num; i += 2) {

                                if (this.is_prime(i)) {
                                        this.known_primes.push(i);
                                        this.primes_count += 1;
                                        this.largest_prime = i;
                                }
                        }

                        primes = [].concat(_toConsumableArray(this.known_primes));

                        return primes;
                }
        }]);

        return Prime;
}();

// module.exports = {
//     Prime: Prime
//   }