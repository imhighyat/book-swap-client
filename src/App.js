import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopNav from './components/TopNav/TopNav';
import LandingPage from './components/HomePage/LandingPage';
import SignUp from './components/Forms/SignUp';
import LogIn from './components/Forms/LogIn';
import Dashboard from './components/Dashboard/Dashboard';

export class App extends React.Component {
	render(){
		return (
        	<Router>
        		<div className='app'>
	        		<TopNav />
	        		<Switch>
	        			<Route exact path='/' component={ LandingPage } />
	        			<Route exact path='/signup' component={ SignUp } />
	        			<Route exact path='/login' component={ LogIn } />
	        			<Route exact path='/dashboard' component={ Dashboard } />
	        		</Switch>
		         </div>
        	</Router>
		);
	}
}

export default connect()(App);