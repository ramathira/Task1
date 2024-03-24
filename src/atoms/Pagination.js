// Pagination.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ButtonGroup from "react-bootstrap/ButtonGroup"; 
import Button from "react-bootstrap/Button"; 

function Pagination({ pagination, fetchData, changePageSize, changePage, handleSearch }) {
  const { currentPage, pageSize, totalCount } = pagination;
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);

  const totalPages = Math.ceil(totalCount / pageSize);
var dropStyle = {  

  position: 'absolute',
  backgroundColor: '#f9f9f9',
   minWidth: '10px',
  padding: '8px 10px',
  textSize:16,
 marginTop:8 
      }  
	  
	var searchButton = {  
      margin:30   

      } 
	  
	  var ButtonStyle = {  
      
 margin:10 
      } 
  const handlePageChange = (newPage) => {
    changePage(newPage);
  };

  const handlePageSizeChange = (event) => {
    const newPageSize = parseInt(event.target.value);
    changePageSize(newPageSize);
    fetchData(1, newPageSize); // Fetch data for the first page with the new page size
  };

  const handleSearchClick = () => {
    setShowSearchInput(true);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    handleSearch(searchQuery); // Invoke the handleSearch function passed as a prop
  };

  return (
    <div>
      
       <span>Page Size: </span>
      <select onChange={handlePageSizeChange} value={pageSize} style = {dropStyle}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
	  


      <span> | Current Page: {currentPage} </span>
<ButtonGroup aria-label="Basic example">      
	 <Button variant="outline-secondary" size="lg" style = {ButtonStyle} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </Button>
	 
      <Button variant="outline-secondary" size="lg" style = {ButtonStyle} onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </Button>	
 </ButtonGroup> 	  
	  <div style = {searchButton}>
        <Button variant="outline-secondary" size="lg" style = {ButtonStyle} onClick={handleSearchClick}>Search</Button>
      </div>
      {showSearchInput && (
        <div>
          <input type="text" value={searchQuery} onChange={handleSearchInputChange} />
          <button onClick={handleSearchSubmit}>Submit</button>
		  
        </div>
      )}
    </div>
  );
}

export default Pagination;
