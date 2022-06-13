
const container = document.querySelector("#container");
reset = document.querySelector("#reset-button");

function resetSize() { 

    let newNumber = prompt("What size would you like the grid to be?(1 - 100)"); 
    if (newNumber <= 100 && newNumber >= 1) { 
    createGrid(newNumber);
    } else { 
        alert("Please enter a correct number!");
        return resetSize(); 
    }
};  



reset.addEventListener('click', () => { 
    resetSize(); 
});


function createGrid(number) { 

    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`; 

     for(let i = 0; i < number * number; i++) { 

       //create grid and append it
       let gridItem = document.createElement("div");
       gridItem.style.backgroundColor = "#AAAAAA";
       container.appendChild(gridItem);
        

       //colour blocks  
       gridItem.addEventListener('mouseover', e=> { 
       gridItem.style.backgroundColor = "#333333"; 
   })

       // clear grid when reset button is clicked
       function clearGrid() { 
           reset.addEventListener('click', e=> {
                gridItem.style.backgroundColor = "#AAAAAA";
           });
        } 
        clearGrid();
        }
    }; 

    
    createGrid(16);










