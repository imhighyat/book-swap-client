import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {updateUserEntry, fetchProfile} from '../actions'
import Loading from './loading';;

export class LogIn extends React.Component{
	logInClick(e, history){
		e.preventDefault();
		console.log(this.username.value, this.password.value);
		this.props.dispatch(fetchProfile());
		setTimeout(()=>history.push('/dashboard'), 3000);
	}
	cancelLogIn(e, history){
		e.preventDefault();
		this.props.dispatch(updateUserEntry('null'));
		history.push('/');
	}
	render(){
		return (
			<Route render={({history}) => (
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
							<button onClick={(e) => this.cancelLogIn(e, history)}>Cancel</button>
							<button onClick={(e) => this.logInClick(e, history)}>Log In</button>
						</div>
		            </form>
		            {this.props.loading && <Loading />}
		        </div>
		    )}/>
		);
	}
}

const mapStateToProps = state => ({
	loading: state.loading
});

export default connect(mapStateToProps)(LogIn);