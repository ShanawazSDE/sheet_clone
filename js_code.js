let columns = 26;
let rows = 100;
const headerContainer = document.querySelector(".header");
const serialNumbersContainer = document.querySelector(".sno");
const mainContainer = document.querySelector(".main");

function createHeaderCells(){
    for(let i = 0; i <= columns; i++){
        let headerCell = document.createElement("div");
        headerCell.className = "header-cell cell";
        if(i !== 0){
            headerCell.innerText = String.fromCharCode(i+64);
        }
        headerContainer.appendChild(headerCell);
    }
}

function createSerialNumberCells(){
    for(let i = 1; i <= rows; i++){
        const snoCell = document.createElement("div");
        snoCell.innerText = i;
        snoCell.className = "sno-cell cell";
        serialNumbersContainer.appendChild(snoCell);
    }
}

function createRow(rowNo){
    const row = document.createElement("div");
    row.className = "row";
    for(let i = 1; i <= columns; i++){
        const cell = document.createElement("div");
        cell.className = "main-cell cell";
        cell.contentEditable = true;
        cell.id = String.fromCharCode(64+i)+rowNo;
        cell.addEventListener("focus",onCellFocus);
        cell.addEventListener("input",onFormChange);
        row.appendChild(cell);

    }
    mainContainer.appendChild(row);
}

function createMainSection(){
    for(let i = 1; i <= rows; i++){
        createRow(i);
    }
}

createHeaderCells();
createSerialNumberCells();
createMainSection();