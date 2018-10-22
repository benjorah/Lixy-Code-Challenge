### My reasoninng throughout the project
I used es6 syntax in order to write less and more maintanable code.
Seperated my core functinality into a class (Prime Class) witrh well defined method for testability and reuseability

## For primality test
 I used the trial division methods with optimisations here and there like

 .Checked if n is a known prime. In order not to waste time with trial division

 . Skip even numbers aside two; this is because all even numbers are divisible by 2 therefore composite

 . Do trial division form 2 -> sqaure root of n because one of the factors of n must be less than or equal to its square root 
 so if we dont find any such factor then n is prime. This also decreases the primality algorithm to O(sqrt(n)) somewhat

 . I had a check to see if the square root of n was an integer because if that is the case the n is most certainly not prime

 . I maintained an array of all primes found previously on program execution (without refresh) cause I figured if n is greater than the largest
 prime, then we can do trial division with the prime numbers up until sqrt(n) because everyother number in that range is a multiple of at least one of those prime numbers. I figured this would save some time..although not much I guess. If sqrt(n) has not been reached before the array of known 
 primes is exhausted, I keep doing trial division with odd numbers till I can determine primality.

 ## Generating Primes

 .I checked that the number of primes needed is more than the primes we already have stored awyay in our array (known_primes).
 If it is less then we slice the array and return and if it is more we start from the largest prime gotten previously as our lower bound (which we alos maintain in a variable...this should give a bit of performance advantage)..then we add new primes to the known_primes array and return a copy of it 
 .The cost of running this application seems to lie heavily on renderingg it on the browser. (Creating the table efficiently)


 ## Tests
 . I composed test (which helped me a lot in the process) to test the core functionality under different conditions. This is to ensure that if the class is used in another application, it performs as expected. 
 . Using default parameters was a  ery important point in order to avoid unexpected crashes due to empty parameters or wrong parameter types
 . I also made sure that the variables that i maintained to oprimise primality test and prime generating were saving the correct values and keeping them for each object created.

 ## Inserting rows
 . I made sure to avoid reflows so the browser doesnt draw the table over an over again.
 