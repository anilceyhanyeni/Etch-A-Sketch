body = document.body
const container = document.querySelector("#container");
const rows = document.getElementsByClassName("gridRows");
const cell = document.getElementsByClassName("cell")

let rowNum = 16;            //default values
let columnCount = 16;
makeRows(rowNum);
makeCells(columnCount);

function cellCount() {
    Array.from(document.querySelectorAll('.cell')).forEach((el) => el.classList.remove('cell'));
    let rowNum = prompt('Enter row number:');
    let columnCount= rowNum;
    makeRows(rowNum);
    makeCells(columnCount);
    return rowNum, columnCount;
    }

function makeRows(rowNum) { 
        
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        //row.textContent = "test"
        container.appendChild(row).className = "gridRows";
    };
};

function makeCells(columnCount) {
    for ( j=0; columnCount>j; j++) {
        for ( k=0; k<columnCount; k++) {
        let cell = document.createElement('div');
        //cell.textContent= "test";
        rows[k].appendChild(cell).className = "cell"
            }
        }
    };  

  
    function changeColor (target) {
        target.style.backgroundColor = 'black';
    }
    
container.addEventListener("mouseover", e => {
    target = e.target;
    if (e.target.matches("div.cell")) {
         changeColor(target);
    }
});
    
function reset() {
    Array.from(document.querySelectorAll('.cell')).forEach((el) => el.classList.remove('cell'));
    makeRows(rowNum);
    makeCells(columnCount);
}
    