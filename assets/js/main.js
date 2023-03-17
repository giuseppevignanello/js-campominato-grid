// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// take play btn from DOM 

const playBtnEl = document.querySelector(".play_btn");

//take container from DOM

const containerEl = document.querySelector(".container")
//create a const for the cell's max number

const maxCellNumb = 100;
// addEventListener on play button


playBtnEl.addEventListener("click",

    function () {
        //create a for loop to create cells "cell's max number" times

        for (let i = 1; i <= maxCellNumb; i++) {
            const cellEl = `<div class="cell"></div>`

            // //log the i value to the cell 
            // console.log(i);

            //append the cell to the containerEL  

            containerEl.innerHTML += cellEl;
        }

        // take all the cells from the DOM

        const cells = document.querySelectorAll(".cell");
        // create a for to 

        for (let i = 0; i < cells.length; i++) {
            
            const thisCell = cells[i];
            thisCell.append (i + 1)
            // add the click event to each cell 

            thisCell.addEventListener("click",
                // change the bg color with classList 
               
                function () {
                    thisCell.classList.toggle("bg_lightblue");
                    console.log(i + 1);
                   


                }
            )

        }




    }

)

















// tools
// -addEventListener
//for loop
// varibles
// log
// createElement
// querySelector/getElementbyadd
// append
//classList(toggle)