// Select color input

// Select size input

const grid = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()

//fills color of clicked cell
function fillColor(event) {
    const colorPicker = document.getElementById('colorPicker').value;
    event.target.style.backgroundColor = colorPicker;
}
//deletes old grid and creats new one based on the users input
function makeGrid(event) {
    event.preventDefault();
    const gridRowLength = grid.rows.length
    for (let r = 0; r < gridRowLength; r++) {
        grid.deleteRow(0); //deletes row 0 every time to avoid issues with delete rows that aren't there(if the last grid was bigger)
    }
    const gridHeight = document.getElementById('inputHeight').value;
    const gridWidth = document.getElementById('inputWidth').value;
    for (let r = 0; r < gridHeight; r++) {
        const newRow = grid.insertRow(r)
        for (let c = 0; c < gridWidth; c++) {
            newRow.insertCell(c).addEventListener('click', fillColor); //each cell has an  event listener to call the fillColor function
        }
    }
};
//the 2 lines simply call the makeGrid function when the submit button is pressed
const sizePicker = document.getElementById('sizePicker');
sizePicker.addEventListener('submit', makeGrid);