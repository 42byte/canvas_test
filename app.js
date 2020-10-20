const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


let count_rows = canvas.height / 60;
let count_columns = canvas.width / 60;
console.log("rows: " + String(count_rows) + ", cols: " + String(count_columns));

//constructor function cell
function Cell(content, x, y, color) {
  this.content = content;
  this.x = x;
  this.y = y;
  this.color = color;
  this.draw = function() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x * 40, this.y * 40, 38, 38);
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.textBaseline = "hanging";
    ctx.fillText(content, this.x * 40, this.y *40);
  };
}

//creating the grid
function createGrid(populate=1, harmonize=0) {
    let grid = [];
    for(let i = 0; i < count_rows; i++) {
        var temp = [];
        for(let j = 0; j < count_columns; j++){
          //decide the fertility
          //randomly place plants
          //color cells accordingly
          if(populate){
            var content = new Cell(randomize(10), j, i, "orange");
            content.draw();
            temp.push(content);
          } else {
            temp.push(0);
          }
        }
        grid.push(temp);
    }

    console.log("grid complete");

    if(harmonize){
      //harmonise with neighbours
      console.log("HARMONISE!");
      harmonise(grid, 1);
    }

    return grid;
}


function harmonise(grid, acceptable_range) {
  //Go through grid and check if every value is within an acceptable range of
  //average of their neighbours
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[0].length; j++){
      //Get the values of neighbours
      var neighbour = neighborCells(grid, i, j, 1, true);

      //Calculate average
      var avg = getAverage(neighbour);
      console.log("Average: " + String(avg));


      //If the value of the position is within the acceptable range of the average,
      //nothing is done. If not, the value is changed to be within range.
      if(grid[i][j].content > Math.abs(avg) /*+ acceptable_range*/) {
        //console.log(grid[i][j]).content)
        console.log("Harmonised! Old value: " + String(grid[i][j].content));
        grid[i][j].content = Math.floor(Math.abs(avg) + (Math.random() -0.5) * acceptable_range * 2);
        grid[i][j].draw();
        console.log("New Value: " + String(grid[i][j].content));
      }
    }
  }
}

function getAverage(array){
  var total = 0;
  for(var x = 0; x < array.length; x++) {
    total += array[x];
  }
  return total / array.length;
}


//Randomizer
function randomize(num) {
  return Math.floor(Math.random() * num)
}

//Check around plant position


function neighborCells(matrix, row, column, sight, returnArray) {
    let retArr = [];
    row_limit = matrix.length;
    if(row_limit > 0){
    column_limit = matrix[0].length;
    for(x = Math.max(0, row-sight); x <= Math.min(row+sight, row_limit); x++){
        for(y = Math.max(0, column-sight); y <= Math.min(column+sight, column_limit); y++){
        if(x != row || y != column){
            if(returnArray){
              //console.log(matrix[x][y]);
              retArr.push(matrix[x][y].content);
            } else {
              //console.log(matrix[x][y]);
              //return matrix[x][y];
            }
        }
        }
    }
    return retArr
    }
}


function createGame() {
  console.log("start");
  const base_layer = createGrid(1, 1);

}
createGame();
//console.log("position: " + String(base_layer[2][2]));
//neighborCells(new_grid, 2, 2, 1);


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
