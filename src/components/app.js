import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import TopNav from './top-nav';
import Homepage from './homepage';
import Dashboard from './dashboard';
import Forms from './forms';

export class App extends React.Component {
	render(){
		return (
        	<Router>
        		<div className='app'>
	        		<TopNav />
	        		<Switch>
		        		<Route exact path='/' component={Homepage} />
		        		<Route exact path='/dashboard' component={Dashboard} />
		        		<Route exact path='/auth/:type' component={Forms} />
		        	</Switch>
		         </div>
        	</Router>
		);
	}
}

export default connect()(App);