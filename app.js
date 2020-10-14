const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


let count_rows = canvas.height / 10;
let count_columns = canvas.width / 10;
console.log("rows: " + String(count_rows) + ", cols: " + String(count_columns));


//creating the grid
function createGrid() {
    let grid = [];
    for(let i = 0; i < count_rows; i++) {
        var temp = [];
        for(let j = 0; j < count_columns; j++){
            var content = "|" + String(i) + ", " + String(j) + "|";
            temp.push(content);
            ctx.fillStyle = "orange";
            ctx.fillRect(j * 40, i *40, 38, 38);
            ctx.fillStyle = "black";
            ctx.textAlign = "left";
            ctx.textBaseline = "hanging";
            ctx.fillText(content, j * 40, i *40);
        }
        grid.push(temp);
    }
    return grid;
}

//createGrid();

//Randomizer


//Check around plant position


function neighborCells(matrix, row, column, sight) {
    row_limit = matrix.length;
    if(row_limit > 0){
    column_limit = matrix[0].length;
    for(x = Math.max(0, row-sight); x <= Math.min(row+sight, row_limit); x++){
        for(y = Math.max(0, column-sight); y <= Math.min(column+sight, column_limit); y++){
        if(x != row || y != column){
            console.log(matrix[x][y]);
        }
        }
    }
    }
}

var new_grid = createGrid();
console.log("position: " + String(new_grid[2][2]));
neighborCells(new_grid, 2, 2, 1);

//inject --> pick random position, check if position is okay, plant


//create plant
class PLANT {
    constructor(className, index) {
        this.className = className;
        this.index = index;
        this.fertility = NaN;
    }
}






let a = 0;

//START DRAWING
var updateFrame;
function startUpdate() {
    console.log(a);
    a += 1;
    updateFrame = setTimeout(startUpdate, 200);
}


//STOP DRAWING
function stopUpdate() {
    window.clearTimeout(updateFrame);
}





