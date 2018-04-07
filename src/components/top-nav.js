import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {demoLogIn} from '../actions';

export class TopNav extends React.Component{
	clickHandler(e){
		e.preventDefault();
		this.props.dispatch(demoLogIn());
		//this.props.history.push('/dashboard');
	}
	render(){
		return (
	        <div className='top-nav'>
	        	{ !this.props.authenticated && <Link to='/forms/signup' >Sign Up</Link> }
	        	{ !this.props.authenticated && <Link to='/forms/login' >Log In</Link>}
	        	<Link to='/'>BookSwap</Link>
	        	{ !this.props.authenticated && <a href='/dashboard' onClick={e=> this.clickHandler(e)}>Demo Account</a> }
	        	<Link to='/'>About</Link>
	        </div>
		);
	}
}


const mapStateTpProps = state => ({
	authenticated: state.authenticated
});

export default connect(mapStateTpProps)(TopNav);