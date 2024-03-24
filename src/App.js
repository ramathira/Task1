// Filename - App.js


import DataContextProvider from './DataContext';
import ProductContextProvider from './ProductContext';
// importing components from react-router-dom package
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

// import Home component
import Home from "./components/Home";
// import Users component
import UsersPage from "./pages/UsersPage";
// import Products component
import ProductsPage from "./pages/ProductsPage";

function App() {
	return (
	
		<>
			{/* This is the alias of BrowserRouter i.e. Router */}
		<DataContextProvider>
		<ProductContextProvider>
			<Router>
				<Routes>
				
					<Route
						exact
						path="/"
						element={<Home />}
					/>
	
				<Route
						path="/users"
						element={<UsersPage />}
					/> 

	
					<Route
						path="/products"
						element={<ProductsPage />}
					/>

					
					
					<Route
						path="*"
						element={<Navigate to="/" />}
					/>
					
					
					
					
				</Routes>
			</Router>
			</ProductContextProvider>
				</DataContextProvider>	
		</>
		
	);
}

export default App;
