
function makeRows() {
    const container = document.querySelector("#container");
    let rowCount = 16;
    for (let i=0; rowCount > i; i++){
        let row = document.createElement('div');
        row.classList.add("rows");
        row.textContent = "test";
        container.appendChild(row);
    }   
    }
    
    
    function makeColumns() {
    const container = document.querySelector("#container");
    let columnCount = 16;
    for (let j=0; columnCount>j; j++) {
        let column = document.createElement('div');
        column.classList.add("columns");
        column.textContent= "Q";
        container.appendChild(column);
        }
    };
    
    makeRows();
    makeColumns();