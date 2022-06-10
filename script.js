//TODO - Change "number"? 

const container = document.querySelector("#container");
reset = document.querySelector("#reset-button");

reset.addEventListener('click', () => { 
    resetSize(); 
});

function resetSize() { 
    let resetValue = prompt("What size would you like the grid to be?(1 - 100)"); 
    container.style.setProperty('--grid rows', resetValue);
    container.style.setProperty('--grid cols', resetValue);
    createGrid(resetValue);
};  



function createGrid(number) { 

    container.style.setProperty('--grid rows', number);
    container.style.setProperty('--grid cols', number);

    for(let i = 0; i < (number * number); i++) { 
        let gridItem = document.createElement("div");
       gridItem.classList.add("grid-item");
       container.appendChild(gridItem);  
       //colour blocks  
       gridItem.addEventListener('mouseover', e=> { 
            gridItem.style.backgroundColor = "white"; 
       })
       // clear grid when reset button is clicked
       function clearGrid() { 
           reset.addEventListener('click', e=> {
                gridItem.style.backgroundColor = "black"
           })
       }

    clearGrid();
    }; 
};



createGrid(16);




