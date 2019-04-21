import React, { Component } from "react"
// import Navigation from "./Components/Navigation"
// import MainBody from "./Components/MainBody"
// import Sitemap from "./Components/Sitemap"
import FlatDesign from './Components/FlatDesign'

import {
	BrowserRouter as Router,
	Route,
	// Link
} from 'react-router-dom'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					{/* <Navigation /> */}
					{/* <MainBody /> */}
					{/* <Sitemap /> */}
					<Route exact path='/'>
						<FlatDesign />
					</Route>
				</Router>
			</div>
		);
	}
}

export default App;
