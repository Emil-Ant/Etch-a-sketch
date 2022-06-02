// Create 16 x 16 Grid 
const container = document.querySelector("#container");

function createGrid() { 
    for(let i = 0; i < 256;i++) { 
       const gridItem = document.createElement("div");
       gridItem.classList.add("gridItem");
       container.appendChild(gridItem);
    }
    return;
};

createGrid();

