// ProductsPage.js
import React, { useContext } from 'react';
import Breadcrumb from '../atoms/Breadcrumb';
import { ProductContext } from '../ProductContext';
import DataTable from '../atoms/DataTable';
import Pagination from '../atoms/Pagination';

function ProductsPage() {
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
	
const { productData=[], pagination, fetchData, changePageSize, changePage } = useContext(ProductContext);

	const columnData = ['title','description','price','discountPercentage','rating','stock','brand','category'];
if (!productData) {
    return <p>Loading...</p>;
  }
console.log("Context data:", { productData, pagination });
  return (
  
    <div style = {outerDiv}>
	 <Breadcrumb path="Products" />
      <h1 style = {headStyle} >Products</h1>
      {productData.length > 0 ? (
        <>
          <DataTable data={productData}  columns={columnData}/>     
		<Pagination pagination={pagination} fetchData={fetchData} changePageSize={changePageSize} changePage={changePage} />
  
   
        </>
      ) : (
         <p>No product data available.</p>
      )}
    </div>
  );
}

export default ProductsPage;
