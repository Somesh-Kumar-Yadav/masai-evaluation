import React from "react";
import "./App.css";
import Home from "./components/HomePage";
import { UsdToInr } from "./usdToinr/UsdToInr";

function App() {
	return (
		<div className="App">
			{/* <UsdToInr /> */}
			<Home />
		</div>
	);
}

export default App;
