import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import TopNav from './top-nav';
import Homepage from './homepage';
import Dashboard from './dashboard';
import Forms from './forms';
import Loading from './loading';

export class App extends React.Component {
	render(){
		if(this.props.loading){
			return (
				<Loading />
			);
		}
		else{
			return (
		        	<Router>
		        		<div className='app'>
			        		<TopNav />
			        		<Switch>
				        		<Route exact path='/' component={Homepage} />
				        		<Route exact path='/dashboard' component={Dashboard} />
				        		<Route exact path='/forms/:type' component={Forms} />
				        	</Switch>
				         </div>
		        	</Router>
			);
		}
	}
}

const mapsStateToProps = state => ({
	userEntry: state.userEntry,
	loading: state.loading,
	authenticated: state.authenticated
});

export default connect(mapsStateToProps)(App);