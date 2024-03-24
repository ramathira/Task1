// UsersPage.js
import React, { useContext } from 'react';
import Breadcrumb from '../atoms/Breadcrumb';
import { DataContext } from '../DataContext';
import DataTable from '../atoms/DataTable';
import Pagination from '../atoms/Pagination';

function UsersPage() {
	var headStyle = {  
         fontSize: 40,  
         fontFamily: 'Neutra Text Light',  
         color: '#322625'  ,
		textAlign:'center'

      }  
	  	var outerDiv = {  
  
         fontFamily: 'Neutra Text Light',  
        margin: 10

      }  
	
const { userData=[], pagination, fetchData, changePageSize, changePage } = useContext(DataContext);

	const columnData = ['firstName', 'lastName', 'maidenName', 'age', 'gender', 'phone','email', 'username','bloodGroup','eyeColor','height','weight'];
if (!userData) {
    return <p>Loading...</p>;
  }
console.log("Context data:", { userData, pagination });
  return (
  
    <div style = {outerDiv}>
	 <Breadcrumb path="Users" />
      <h1 style = {headStyle} >Users</h1>
      {userData.length > 0 ? (
        <>
          <DataTable data={userData}  columns={columnData}/>     
		<Pagination pagination={pagination} fetchData={fetchData} changePageSize={changePageSize} changePage={changePage} />
  
   
        </>
      ) : (
         <p>No user data available.</p>
      )}
    </div>
  );
}

export default UsersPage;
