import * as xlsx from 'xlsx';
import * as fs from 'fs';

// Define the path to your Excel file
const filePath: string = 'src/diem_thi_thpt_2022.xlsx';

// Read the Excel file
const workbook: xlsx.WorkBook = xlsx.readFile(filePath);

// Get the names of all sheets in the Excel file
const sheetNames: string[] = workbook.SheetNames;

sheetNames.forEach(sheetName => {
  // Access a specific sheet by name
  const worksheet: xlsx.WorkSheet = workbook.Sheets[sheetName];

  // Convert the sheet data to a JSON object
  const data: string[] = xlsx.utils.sheet_to_json(worksheet);

  // Print the JSON data
  console.log(`Data from sheet: ${sheetName}`);
  console.log(data);
});

