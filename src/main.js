"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var xlsx = require("xlsx");
// Define the path to your Excel file
var filePath = 'src/diem_thi_thpt_2022.xlsx';
// Read the Excel file
var workbook = xlsx.readFile(filePath);
// Get the names of all sheets in the Excel file
var sheetNames = workbook.SheetNames;
sheetNames.forEach(function (sheetName) {
    // Access a specific sheet by name
    var worksheet = workbook.Sheets[sheetName];
    // Convert the sheet data to a JSON object
    var data = xlsx.utils.sheet_to_json(worksheet);
    // Print the JSON data
    console.log("Data from sheet: ".concat(sheetName));
    console.log(data);
});
