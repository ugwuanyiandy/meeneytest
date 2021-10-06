import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";

import Home from "../pages/Home";
import FrontHeader from "../layouts/FrontHeader";

export class FrontBody extends Component{
	render() {
		return(
			<>
				<FrontHeader/>
				<main>
					<Switch>
						<Route path={'/'} component={Home} exact={true} />
					</Switch>
				</main>
			</>
		)
	}
}

export default FrontBody;