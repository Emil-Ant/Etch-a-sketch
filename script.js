
const container = document.querySelector("#container");
reset = document.querySelector("#reset-button");

//TODO: this function is creating div on top of the existing grid rather than resizing it
function resetSize() { 
    let newNumber = prompt("What size would you like the grid to be?(1 - 100)");  
    createGrid(newNumber);
};  

reset.addEventListener('click', () => { 
    resetSize(); 
});


function createGrid(number=16) { 

     for(let i = 0; i < (number * number); i++) { 
       //create grid and append it
       let gridItem = document.createElement("div");
       gridItem.innerText = (i + 1);
       gridItem.classList.add("grid-item");
       container.appendChild(gridItem); 
       container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
       container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;  

       //colour blocks  
       gridItem.addEventListener('mouseover', e=> { 
       gridItem.style.backgroundColor = "red"; 
   })

       // clear grid when reset button is clicked
       function clearGrid() { 
           reset.addEventListener('click', e=> {
                gridItem.style.backgroundColor = "white";
           });
        } 
      
    }

    clearGrid();
    }; 

    
    createGrid();










