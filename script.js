//TODO - Change "number"? 



const container = document.querySelector("#container");
reset = document.querySelector("#reset-button");

reset.addEventListener('click', () => { 
    resetSize(); 
})

function resetSize() { 
    let number = prompt("What size would you like the grid to be?(1 - 100)"); 
    container.style.setProperty('--grid rows', number);
    container.style.setProperty('--grid cols', number);
    createGrid(number);
}


function createGrid(number) { 
    container.style.setProperty('--grid rows', number);
    container.style.setProperty('--grid cols', number);
    for(i = 0; i < (number * number); i++) { 
       const gridItem = document.createElement("div");
       gridItem.innerText = (i+1);
       gridItem.classList.add("grid-item");
       container.appendChild(gridItem);  
        
       // clear grid when reset button is clicked
       function clearGrid() { 
           reset.addEventListener('click', () => 
           gridItem.style.backgroundColor = "white")
       }
    clearGrid();
    hoverColour();  
    };
    

};

// function to add eventlistenever to each .grid-item and colour it at mouseover 
function hoverColour() { 
    let items = document.querySelectorAll(".grid-item"); 
    items.forEach(item => { 
        item.addEventListener('mouseover', () => { 
            item.style.backgroundColor = "blue"; 
        });
    
    });

    
};


createGrid(16);




