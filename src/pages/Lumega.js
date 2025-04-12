import React, { useState } from 'react';

function TableGenerator() {
    const [rows, setRows] = useState(4);  // Set default rows to 4
    const [cols, setCols] = useState(5);  // Set default columns to 5

    const handleRowsChange = (event) => {
        setRows(event.target.value);
    };

    const handleColsChange = (event) => {
        setCols(event.target.value);
    };

    const generateTable = () => {
        let number = 1;  // Start from 1
        let tableRows = [];

        for (let i = 0; i < rows; i++) {
            let rowCells = [];
            for (let j = 0; j < cols; j++) {
                rowCells.push(<td key={j}>{number}</td>);  // Fill with sequential numbers
                number++;  // Increment the number
            }
            tableRows.push(<tr key={i}>{rowCells}</tr>);
        }
        return tableRows;
    };

    return (
        <div>
            <h2>Generated Table</h2>
            <div>
                <label>
                    Rows: 
                    <input 
                        type="number" 
                        value={rows} 
                        onChange={handleRowsChange} 
                        min="1" 
                    />
                </label>
                <label>
                    Columns: 
                    <input 
                        type="number" 
                        value={cols} 
                        onChange={handleColsChange} 
                        min="1" 
                    />
                </label>
            </div>
            <table border="1">
              <thead>
                <tr>
                  {Array.from({ length: cols }).map((_, index) => (
                      <th key={index}>Column {index + 1}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {generateTable()}
              </tbody>
            </table>
        </div>
    );
}

export default TableGenerator;
