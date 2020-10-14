const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


let rows = canvas.height / 10;
let columns = canvas.width / 10;
console.log("rows: " + String(rows) + ", cols: " + String(columns));


//creating the grid
function createGrid() {
    let grid = [];
    for(let i = 0; i < rows; i++) {
        var temp = [];
        for(let j = 0; j < columns; j++){
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
}

createGrid();

let a = 0;

var updateFrame;
//updateFrame = setTimeout(update, 500);

function startUpdate() {
    console.log(a);
    a += 1;
    updateFrame = setTimeout(startUpdate, 500);
}

function stopUpdate() {
    window.clearTimeout(updateFrame);
}

//TESTING




