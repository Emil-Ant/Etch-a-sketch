//TODO - Change "number"? 

const container = document.querySelector("#container");
reset = document.querySelector("#reset-button");

reset.addEventListener('click', () => { 
    resetSize(); 
});


function createGrid(number) { 

    // container.style.setProperty('--grid rows', number);
    // container.style.setProperty('--grid cols', number);

    for(let i = 0; i < (number * number); i++) { 
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
    } 
      
       // clear grid when reset button is clicked
    //    function clearGrid() { 
    //        reset.addEventListener('click', e=> {
    //             gridItem.style.backgroundColor = "white";
    //        })
    //    }

    // clearGrid();
    }; 

    
    createGrid(16);


function resetSize() { 
    let newNumber = prompt("What size would you like the grid to be?(1 - 100)"); 
    number = newNumber; 

    createGrid(newNumber);
};  






