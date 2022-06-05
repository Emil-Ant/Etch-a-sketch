// Create 16 x 16 Grid 
const container = document.querySelector("#container");

function createGrid(rows, cols) { 
    container.style.setProperty('--grid rows', rows);
    container.style.setProperty('--grid cols', cols);
    for(i = 0; i < (rows * cols); i++) { 
       const gridItem = document.createElement("div");
       gridItem.innerText = (i+1);
       gridItem.classList.add("grid-item");
       container.appendChild(gridItem);  
    };
    hoverColour(); 

};

// function to add eventlistenever to each .grid-item and colour it at mouseover 
function hoverColour() { 
    let items = document.querySelectorAll(".grid-item"); 
    items.forEach(item => { 
        item.addEventListener('mouseover', () => { 
            item.style.backgroundColor = "blue"; 
        })
    })
}


createGrid(16, 16);



