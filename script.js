
const container = document.querySelector("#container");
reset = document.querySelector("#reset-button");

// TODO: this function is creating div on top of the existing grid rather than resizing it. Dont think the problem is the function itself
// TODO also: when removing i + 1 from loop the grid no longer fills up
function resetSize() { 

    let newNumber = prompt("What size would you like the grid to be?(1 - 100)"); 
    createGrid(newNumber);
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
       gridItem.style.backgroundColor = "black";
       container.appendChild(gridItem);
        

       //colour blocks  
       gridItem.addEventListener('mouseover', e=> { 
       gridItem.style.backgroundColor = "white"; 
   })

       // clear grid when reset button is clicked
       function clearGrid() { 
           reset.addEventListener('click', e=> {
                gridItem.style.backgroundColor = "black";
           });
        } 
        clearGrid();
        }
    }; 

    
    createGrid(16);










