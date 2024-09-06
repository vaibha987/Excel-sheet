/**
 * Problem Statement
 * Create Excel/Google Sheets Table Layout/Cells
 * Front-End
 * Optional to add other properties such as select, editable formulas, etc.
 *
 * **/
const table = document.getElementById("excel-table").querySelector("tbody");
const columnHeaders = document
  .getElementById("excel-table")
  .querySelector("thead tr");

const numRows = 30;
const numCols = 3000;

// Created 1st Column Header; which should be empty as its filled with Row Headers
const emptyTh = document.createElement("th");
emptyTh.innerText = " ";
columnHeaders.appendChild(emptyTh);

// Create Remaining Column Headers
for (let col = 1; col <= numCols; col++) {
  const th = document.createElement("th");
  th.innerText = getColumnName(col - 1);
  columnHeaders.appendChild(th);
}

// Function to generate headers from Column Number Received
function getColumnName(index) {
  let columnName = ""; // ""
  while (index >= 0) {
    columnName = String.fromCharCode((index % 26) + 65) + columnName;
    index = Math.floor(index / 26) - 1;
  }
  return columnName;
}

// Create Rows and Cells
for (let row = 1; row <= numRows; row++) {
  const tr = document.createElement("tr");

  // Row headers / sl.no.
  const th = document.createElement("th");
  th.innerText = row;
  tr.appendChild(th); // Each Row

  for (let col = 0; col < numCols; col++) {
    const td = document.createElement("td"); // Cell
    td.setAttribute("contentEditable", true); // Makes the whole cell editable and behave like actual sheets
    tr.appendChild(td);
  }
  table.appendChild(tr); // Adding the row to our table
}

// Event handling to enable Cell Input
table.addEventListener("input", (event) => {
  // Handle Cell Input - Try out yourselves!
});
