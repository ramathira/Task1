// DataTable.js
import React from 'react';

function DataTable({ data, columns }) {
	var tabStyle = {  
         fontSize: 20,  
         fontFamily: 'Neutra Text Light',
         color: '#322625'  ,
		border: '1px solid #ddd',

      }  
	  var headStyle = {  
        backgroundColor:'#c0e3e5',
		textTransform: 'uppercase',
		fontSize: 15, 

      } 

  return (
    <table style = {tabStyle}>
      <thead style = {headStyle}>
         <tr>
            {columns.map((column) => (
              <th  style={{width: '10%'}} key={column}>{column}</th>
            ))}
          </tr>
      </thead>

	  
	     <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column}>{item[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
		
    </table>
  );
}

export default DataTable;
