import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import FrontBody from "./layouts/FrontBody";

function App() {
	return (
		<Router>
			<Switch>
				<Route component={FrontBody}/>
			</Switch>
		</Router>
	);
}

export default App;
