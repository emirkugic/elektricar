import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./App.css";

function App() {
	return (
		<Router>
			<div className="App">
				<main>
					<Routes>
						<Route path="*" element={<Homepage />} />
					</Routes>
				</main>
			</div>
		</Router>
	);
}

export default App;
