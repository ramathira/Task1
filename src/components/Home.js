// Filename - Home.jsx
import React from "react";
// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";
var outerDiv = {  
         		
		display: 'flex', 
		justifyContent: 'center', 
		alignItems: 'center', 
		height: '100vh'

      } 
var innerDiv = {  
         		
		width: '50%', 
		height: '250px', 
		backgroundColor: '#ebebeb', 
		textAlign: 'center' 

      } 
	  var linkStyle = {  
         		
		textDecoration:'none',
		color:'#322625'

      } 
const Home = () => {
	return (
		 <div  style = {outerDiv} >
		<div style = {innerDiv} >
			<h1>Home</h1>
			<br />
			<ul>
				<li>
					
					<Link style = {linkStyle} to="/">Home</Link>
				</li>
				<li>
					
					<Link style = {linkStyle} to="/users">Users</Link>
				</li> 
				<li>
					
					<Link style = {linkStyle} to="/products">Products</Link>
				</li>
				
				
			</ul>
		</div>
		</div>
	);
};

export default Home;
