import React from "react";
import "./App.css";
import Routes from "./Route/Route";
import { UsdToInr } from "./usdToinr/UsdToInr";

function App() {
	return (
		<div className="App">
			{/* <UsdToInr /> */}
			<Routes />
		</div>
	);
}

export default App;
