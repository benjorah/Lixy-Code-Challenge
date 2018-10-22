class Prime{

    // starting with a base array of known primes
    constructor(known_primes=[2,3,5,7]){

    //keep an array of known primes which keeps incereasing as we find knew primes, 
    // this would reduce the time it takes to generate subsequent series of primes
    this.known_primes=known_primes;

    //save the length of the known_primes array so if the new sequence is shorter we need not generate it again
    this.primes_count=known_primes.length;


    //saving the largest prime gotten would help in determining the bounds 
    //for the trial division methodof finding primes as would be shown
    this.largest_prime=known_primes[this.primes_count - 1];

    }

    is_prime(num=0){

        // no need to test for primality if input isnt a number
        if(typeof num!=='number'){
            throw (new Error("The input parameter must be a positive integer"));
        }

        //test the number for known primes
       if(num<=1){
           return false;
       }

       //check if the number is one of the known primes
       else if(this.known_primes.includes(num)){
           return true;
       }

        //2 is the only prime even number
       else if(num%2==0){
            return false;
       }

       let numRoot=Math.sqrt(num);

        // if the square root of the number is an integer then the number is not  a prime
       if(parseInt(numRoot)===numRoot){

        return false;

       }

       numRoot=parseInt(numRoot);

        // for testing primality of a number, you check if it is divisible by other primes 
        // before it cause most other numbers are multiples of them
       for(const prime of this.known_primes){


           if(num%prime==0){
               return false;
           }


             //we want the for loop to run until we hit the square root of the number or
            //or we go to the second loop below otherwise
           if(prime>=numRoot){

            return true;
        }

       }

       //this block runs only if the square root of the number is larger than the largest prime found and strored previously
       //we put the upperbound at the square root cause a number is a multiple of two integers where 
       //at least one of it is equal to or less than its square root; i.e one of its factor must be equal to or less than its square root
       for(let i=this.largest_prime;i<numRoot;i++){

            if(num%i==0){
                return false;
            }

        }

        return true;




        

    }

    generate_primes_till(num=0){

        let primes=[]

         // input should be a positive integer only
         if(typeof num!=='number'){
            throw (new Error("The input parameter must be a positive integer"));
        }

        //return empty array if the number of primes requested is not up to 1
        if(num<1){

            return primes;
        }

        //if number of primes to be gotten is less than length or array of known_primes we return the primes by slicing the array
        if(num<this.primes_count){
            primes=[...this.known_primes];
            primes=primes.splice(0,num);
            return primes;
        }


        //we initailize the for loop to start from the next odd number and to only consider odd numbers
        for(let i=this.largest_prime+2;this.primes_count<num;i+=2){

            if(this.is_prime(i)){
                this.known_primes.push(i);
                this.primes_count+=1;
                this.largest_prime=i;
            }

        }

        primes=[...this.known_primes];

        return primes;

        
    }
}


// module.exports = {
//     Prime: Prime
//   }