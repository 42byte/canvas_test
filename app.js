const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


let count_rows = canvas.height / 60;
let count_columns = canvas.width / 60;
console.log("rows: " + String(count_rows) + ", cols: " + String(count_columns));

//constructor function cell
class Cell {
  constructor(value, x, y, color) {
    this.value = value;
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw = function() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x * 40, this.y * 40, 38, 38);
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.textBaseline = "hanging";
    ctx.fillText(this.value, this.x * 40, this.y *40);
  };
}

//creating the grid
function createGrid(populate=1, harmonise=0) {
    let grid = [];
    for(let i = 0; i < count_rows; i++) {
        var temp = [];
        for(let j = 0; j < count_columns; j++){
          if(populate){
            //var rand = getRandomNumber(10);
            var cell = new Cell(getRandomNumber(10), j, i, "orange");
            //console.log(cell.value)
            //value.draw();
            temp.push(cell);
          } else {
            temp.push(0);
          }
        }
        grid.push(temp);
    }

    console.log("grid complete");
    console.log(grid);

    if(harmonise){
      //harmonise with neighbours
      console.log("HARMONISE!");
      harmoniseValue(grid, 2);
    }

    return grid;
}


function harmoniseValue(grid, acceptable_range) {
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
      if(grid[i][j].value > avg + acceptable_range || grid[i][j].value < Math.abs(avg) - acceptable_range) {
        console.log("Harmonised! Old value: " + String(grid[i][j].value));
        var temp = Math.floor(Math.abs(avg) + (Math.random() -0.5) * acceptable_range * 2);
        grid[i][j].value = (temp < 0) ? 0 : temp;
        grid[i][j].draw();
        console.log("New Value: " + String(grid[i][j].value));
      } else {
        grid[i][j].draw();
      }
    }
  }
}

//Takes an array and calculates the average
function getAverage(array){
  var total = 0;
  for(var x = 0; x < array.length; x++) {
    total += array[x];
  }
  return total / array.length;
}


//Randomizer
function getRandomNumber(num) {
  return Math.floor(Math.random() * num)
}


//Goes aroun done position and returns the values of neighborcells
function neighborCells(matrix, row, column, sight, returnArray) {
    let retArr = [];//the array to return
    row_limit = matrix.length;
    if(row_limit > 0){
    column_limit = matrix[0].length;
    for(x = Math.max(0, row - sight); x < Math.min(row + sight, row_limit); x++){
        for(y = Math.max(0, column - sight); y < Math.min(column + sight, column_limit); y++){
        if(x != row || y != column){
            if(returnArray){
              retArr.push(matrix[x][y].value);
            } else {
              console.log(matrix[x][y]);
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
