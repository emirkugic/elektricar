import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import "./App.css";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Homepage />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
