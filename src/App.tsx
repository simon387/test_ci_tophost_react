import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Route path={'/'} exact component={Dashboard}/>
			</BrowserRouter>
		</div>
	);
}

export default App;
