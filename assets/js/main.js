// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// take play btn from DOM 

const playBtnEl = document.querySelector(".play_btn");

//take container from DOM

const containerEl = document.querySelector(".container")
//create a const for the max cell's number

const maxCellNumb = 100; 
// addEventListener on play button

playBtnEl.addEventListener( "click", 

    function() {
    //create a for loop to create cells "max cell's number's" times
        
        for (let i = 1; i <= maxCellNumb; i++) {
            const cellEl = `<div class="cell"></div>`

            //append the i value to the cell 
            console.log (i);
            cellEl.innerText = str(i); 

            //append the cell to the containerEL  

            containerEl.innerHTML += cellEl; 
            
        }
        
        


    }
)
   

// take all the cells from the DOM
// create a for to 
    // add the click event to each cell 
        // change the bg color with classList 
        //console.log the number of the cell







// tools
// -addEventListener
//for loop
// varibles
// log
// createElement
// querySelector/getElementbyadd
// append
//classList(toggle)