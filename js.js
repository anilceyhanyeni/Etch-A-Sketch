body = document.body
const container = document.querySelector("#container");
const etch = document.querySelector("#etch");
const rows = document.getElementsByClassName("gridRows");
const cells = document.getElementsByClassName("cell")

let rowNum = 16;                                                //default values
let columnCount = 16;

makeRows(rowNum);
makeCells(columnCount);

function cellCount() {                                                                                      //changes cell count with user input
    Array.from(document.querySelectorAll('.cell')).forEach((el) => el.classList.remove('cell'));
    rowNum = prompt('Enter cell count:');
    columnCount= rowNum;
    makeRows(rowNum);
    makeCells(columnCount);
    return rowNum, columnCount;
    }

function makeRows(rowNum) {                             //creates rows   
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        //row.textContent = "test"
        etch.appendChild(row).className = "gridRows";
    };
};

function makeCells(columnCount) {                        //takes column number from row number since it's a square   //creates cells 
    for ( j=0; columnCount>j; j++) {
        for ( k=0; k<columnCount; k++) {
        let cell = document.createElement('div');
        //cell.textContent= "test";
        rows[k].appendChild(cell).className = "cell"
            }
        }
    };  

  
    function changeColor (target) {                       //changes squares to black
        target.style.backgroundColor = 'black';        
    }
    
etch.addEventListener("mouseover", e => {              //mouseover function                            
    target = e.target;       
    if (e.target.matches("div.cell")) {
         changeColor(target);
    }
});
    
function reset() {                                                                                                  //resets grid to default
    Array.from(document.querySelectorAll('.cell')).forEach((el) => el.classList.remove('cell'));
    makeRows(rowNum);
    makeCells(columnCount);
}
    