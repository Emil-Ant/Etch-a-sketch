// Create 16 x 16 Grid 
const container = document.querySelector("#container");

function createGrid(rows, cols) { 
    container.style.setProperty('--grid rows', rows);
    container.style.setProperty('--grid cols', cols);
    for(let i = 0; i < (rows * cols); i++) { 
       const gridItem = document.createElement("div");
       gridItem.innerText = (i+1);
       container.appendChild(gridItem).classname = "grid-item";
    };

};


createGrid(16, 16);


