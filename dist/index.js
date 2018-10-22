"use strict";

//Model
var model = { current_prime_count: 0, prime_numbers: [] };

//View
var view = {
    init: function init() {
        var _this = this;

        //initalize DOM elements for quick access
        this.table = document.getElementById("multiplication-table");
        this.table_input = document.getElementById("table-control__dimension");
        this.table_button = document.getElementById("table-control__button");

        //set button onclick listener
        this.table_button.addEventListener('click', function () {

            var limit = parseInt(_this.table_input.value);

            controller.generate_primes(limit);
        });

        // render this view (update the table with the right cells)
        this.render();
    },
    buildOptimizedRows: function buildOptimizedRows() {
        //build more columns in one loop of the for loop so as to decrease runtime

    },
    render: function render() {
        // update the DOM elements with values from the current primes\

        this.table.innerHTML = "";

        var tbody = document.createElement("tbody");

        for (var i = 0; i <= model.current_prime_count; i++) {

            var tr = document.createElement("tr");

            for (var j = 0; j <= model.current_prime_count; j++) {

                var td = document.createElement("td");
                var txt = null;

                if (i === 0 && j === 0) {
                    txt = document.createTextNode("");
                } else if (i === 0) {

                    txt = document.createTextNode("" + model.prime_numbers[j - 1]);
                } else if (j === 0) {

                    txt = document.createTextNode("" + model.prime_numbers[i - 1]);
                } else {
                    txt = document.createTextNode("" + model.prime_numbers[j - 1] * model.prime_numbers[i - 1]);
                }

                td.appendChild(txt);
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }

        this.table.appendChild(tbody);
    }
};

//controller
var controller = {
    init: function init() {
        this.primer = new Prime(); //initialize Prime Class
        model.current_prime_count = 10;
        model.prime_numbers = this.primer.generate_primes_till(10);
        view.init(); //display initial table for first 10 primes
    },
    generate_primes: function generate_primes() {
        var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        model.current_prime_count = n;
        model.prime_numbers = this.primer.generate_primes_till(n);
        console.log("primes are " + model.prime_numbers);
        view.render();
    }
};

//start program after table has loaded
window.addEventListener("load", controller.init(), false);