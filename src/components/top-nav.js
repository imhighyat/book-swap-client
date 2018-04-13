import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {fetchProfile, backToHome, showEntryForm} from '../actions';

export class TopNav extends React.Component{
	demoHandler(e, history){
		e.preventDefault();
		this.props.dispatch(fetchProfile());
		setTimeout(()=>history.push('/dashboard'), 3000);
	}

	backToHomeHandler(e, history){
		e.preventDefault();
		this.props.dispatch(backToHome());
		history.push('/');
	}

	userEntryHandler(e, form, history){
		e.preventDefault();
		this.props.dispatch(showEntryForm(form));
		history.push(`/auth/${form}`);
	}

	render(){
		return (
			<Route render={({history}) => (
				<div className='top-nav'>
		        	{ !this.props.authenticated && <a href='/auth/signup' onClick={e=> this.userEntryHandler(e, 'signup', history)}>Sign Up</a> }
		        	{ !this.props.authenticated && <a href='/auth/login' onClick={e=> this.userEntryHandler(e, 'login', history)}>Log In</a>}
		        	<a href='/' onClick={e=> this.backToHomeHandler(e, history)}>BookSwap</a>
		        	{ !this.props.authenticated && <a href='/dashboard' onClick={e=> this.demoHandler(e, history)}>Demo Account</a> }
		        	<a href='/' onClick={e=> this.backToHomeHandler(e, history)}>About</a>
		        </div>
			)}/>
		);
	}
}


const mapStateTpProps = state => ({
	authenticated: state.authenticated
});

export default connect(mapStateTpProps)(TopNav);