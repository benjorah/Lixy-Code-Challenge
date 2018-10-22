// const prime = require('../dev/prime.js');

describe("Prime Numbers Class", function() {
    // let primeClass=new prime.Prime();


    describe("Should determine if a number is prime", function() {

        let primeClass=new Prime();


        it("should throw error if input is of wrong type", function() {

            expect(function(){primeClass.is_prime("hello")}).toThrow(new Error("The input parameter must be a positive integer"));
            expect(function(){primeClass.is_prime([])}).toThrow(new Error("The input parameter must be a positive integer"));
            expect(function(){primeClass.is_prime({})}).toThrow(new Error("The input parameter must be a positive integer"));
           
    
        });

        it("should return false if parameter is not give or if parameter is less than 1",function(){
            expect(primeClass.is_prime()).toBe(false);
            expect(primeClass.is_prime(-3)).toBe(false);
           
        })

        it("should return false if the input is composite and true if the input is prime ",function(){
            expect(primeClass.is_prime(15)).toBe(false);
            expect(primeClass.is_prime(11)).toBe(true);
        })

    });


    describe("Should generate the first n primes", function() {

        let primeClass=new Prime();


        it("should throw error if input is of wrong type", function() {

            expect(function(){primeClass.generate_primes_till("a string")}).toThrow(new Error("The input parameter must be a positive integer"));
            expect(function(){primeClass.generate_primes_till([])}).toThrow(new Error("The input parameter must be a positive integer"));
            expect(function(){primeClass.generate_primes_till({})}).toThrow(new Error("The input parameter must be a positive integer"));
           
        });

        it("should return an empty array if no input parameter is given or input paramter is less than 1", function() {

            expect(primeClass.generate_primes_till()).toEqual([]);
            expect(primeClass.generate_primes_till(0)).toEqual([]);
            expect(primeClass.generate_primes_till(-10)).toEqual([]);
           
        });


        it("should return an array of primes when given an input parameter greater than 0", function() {

            expect(primeClass.generate_primes_till(2)).toEqual([2,3]);//this is to test returning sub-array from known primes
            expect(primeClass.generate_primes_till(10)).toEqual([2,3,5,7,11,13,17,19,23,29]);
           
        });


        it("should update the dynamic programming parameters accordingly", function() {

            expect(primeClass.largest_prime).toBe(29);
            expect(primeClass.primes_count).toBe(10);
            expect(primeClass.known_primes).toEqual([2,3,5,7,11,13,17,19,23,29]);
    
           
        });
    

    });


    


   
});