//Model
let model={current_prime_count:0,prime_numbers:[]};


//View
let view={
    init(){

        //initalize DOM elements for quick access
        this.table=document.getElementById("multiplication-table");
        this.table_input=document.getElementById("table-control__dimension");
        this.table_button=document.getElementById("table-control__button");
        this.loadingText=document.getElementById("loading");


        //set button onclick listener
        this.table_button.addEventListener('click', ()=>{

        const limit=parseInt(this.table_input.value);


            controller.generate_primes(limit);

        });

        // render this view (update the table with the right cells)
        this.hideLoading();
        this.render();

    },


    buildOptimizedRows(){
        //build more columns in one loop of the for loop so as to decrease runtime

        

    },


    hideLoading(){
        this.loadingText.style.display="none";
    },

    showLoading(){
        this.loadingText.style.display="block";
    },

    render() {
        // update the DOM elements with values from the current primes\

        this.table.innerHTML="";


        //create table body to hold all the rows
        const tbody=document.createElement("tbody");



        //create rows and then columns in each row
       for(let i=0;i<=model.current_prime_count;i++){

            //create table row to hold all the columns
            const tr = document.createElement("tr");

            for(let j=0;j<=model.current_prime_count;j+=1){

                
                //create table data node to represent column
                const td = document.createElement("td");
                let txt=null


                //create textNode to instert into each column
                if(i===0 && j===0){

                    //create empty cell at the first column of the first row of the table
                    txt=document.createTextNode("");
                }

                else if(i===0){

                    txt = document.createTextNode(`${model.prime_numbers[j-1]}`);

                }


                else if(j===0){
                
                    txt = document.createTextNode(`${model.prime_numbers[i-1]}`);


                }

                else{
                txt = document.createTextNode(`${model.prime_numbers[j-1]*model.prime_numbers[i-1]}`);
                }

                //insert the textNode into the column and then the column into the row
                td.appendChild(txt);
                tr.appendChild(td);
                
            }

            //insert the row into the created body
            tbody.appendChild(tr);

       }

       //insert the body once to avoid reflow
       this.table.appendChild(tbody);




    }
}


//controller
let controller={

    init(){
        this.primer=new Prime();//initialize Prime Class
        model.current_prime_count=10;
        model.prime_numbers=this.primer.generate_primes_till(10);
        view.init();//display initial table for first 10 primes

    },

    generate_primes(n=0){
        model.current_prime_count=n;
        view.showLoading();

        new Promise((resolve, reject)=> {
            
            resolve(this.primer.generate_primes_till(n));     
          }).then(result=>{

            model.prime_numbers=[...result];
            view.hideLoading();
            view.render();
            return result;

          })
         
        

    }

}


//start program after table has loaded
window.addEventListener("load",controller.init(),false);


