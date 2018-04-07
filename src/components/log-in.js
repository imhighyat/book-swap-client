import React from 'react';
import {connect} from 'react-redux';

import {logInClick} from '../actions';

export class LogIn extends React.Component{
	handleClick(e, button){
		e.preventDefault();
		if(button === 'login'){
			console.log(this.username.value, this.password.value);
		}
		this.props.dispatch(logInClick(button));
	}

	render(){
		return (
	        <div className='log-in'>
	        	<form>
					<label>Username</label>
					<input type='text' 
						name='username' 
						placeholder='Enter Username' 
						required
						ref={input => this.username = input} />
					<label>Password</label>
					<input type='password' 
						name='password' 
						placeholder='Enter Password' 
						required 
						ref={input => this.password = input} />
					<div className='log-in-buttons'>
						<button onClick={(e) => this.handleClick(e, 'cancel')}>Cancel</button>
						<button onClick={(e) => this.handleClick(e, 'login')}>Log In</button>
					</div>
	            </form>
	        </div>
		);
	}
	
}

export default connect()(LogIn);