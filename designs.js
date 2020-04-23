
//iteract with table in DOM
const tableAudit = document.getElementsByTagName("td");


//*******************--- Make grid on submit event ---******************//
//grab form ref
const formSubmit = document.getElementById('sizePicker');

//
formSubmit.addEventListener('submit', function () {
    event.preventDefault();

    //get height & width from input
    let gridHeight = document.getElementById('inputHeight').value;
    let gridWidth = document.getElementById('inputWidth').value;

    // Check if there's any existing data in the table & refresh
    if (tableAudit.length == (gridHeight*gridWidth)) {
        gridRefresh();
    }
      // Make a grid using input value
    else {
        makeGrid(gridHeight,gridWidth)
    }
});

//******************--- Color cells based on colorPicker ---*****************//
function colorFill(event) {
    const colorPicker = document.getElementById('colorPicker').value;
    event.target.bgColor=colorPicker;
}

//***********************--- Refresh grid ---***********************//

function gridRefresh () {
      for (let i = 0; i < tableAudit.length; i++) {
          if (tableAudit[i].bgColor != "") {
             tableAudit[i].bgColor = "";
          }
       event.preventDefault();
      }
}


//***********************--- Make the grid!! ---***********************//

function makeGrid(gridHeight, gridWidth) {

let table = document.getElementById('pixelCanvas');
table.innerHTML = "";

  //build rows to inputted height
   for (let r = 0; r < gridHeight; r++) {
    let newRow = table.insertRow(r)
  //build cells to inputted width
     for (let c = 0; c < gridWidth; c++) {
       newRow.insertCell(c);
      }
    }
    event.preventDefault();
    table.addEventListener('click', colorFill);
}
