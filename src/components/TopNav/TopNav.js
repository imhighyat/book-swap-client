import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { toggleAbout, toggleAuthenticated } from './../../actions/topNavActions';

export class TopNav extends React.Component{
	//only show log in, sign up and demo account links if authenticated false
	handleClick(origin, e, history){
		e.preventDefault();
		if(origin === 'about'){
			this.props.dispatch(toggleAbout(true));
		}
		else if(origin === 'signup'){
			history.push('/signup');
		}
		else if(origin === 'login'){
			history.push('/login');
		}
		else if(origin === 'demo'){
			history.push('/dashboard');
			this.props.dispatch(toggleAuthenticated(true));
		}
		else if(origin === 'home'){
			history.push('/');
			this.props.dispatch(toggleAuthenticated(false));
		}
	}

	render(){
		return (
			<Route render={({history}) => (
				<div className='top-nav'>
		        	{ !this.props.authenticated && 
		        		<a href='/signup' 
		        			onClick={ e=> this.handleClick('signup', e, history) }>Sign Up</a> }
		        	{ !this.props.authenticated && 
		        		<a href='/login'
		        			onClick={ e=> this.handleClick('login', e, history) }>Log In</a> }
		        	<a href='/' onClick={ e=> this.handleClick('home', e, history) }>BookSwap</a>
		        	{ !this.props.authenticated && 
		        		<a href='/dashboard'
		        			onClick={ e=> this.handleClick('demo', e, history) }>Demo Account</a> }
		        	<a href='javascript:void(0)' onClick={ e=> this.handleClick('about', e, history) }>About</a>
		        </div>
			)}/>
		);
	}
}



const mapStateToProps = state => ({
	authenticated: state.userEntryReducer.authenticated
});

export default connect(mapStateToProps)(TopNav);