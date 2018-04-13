import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {updateUserEntry, fetchProfile} from '../actions'
import Loading from './loading';;

export class SignUp extends React.Component{
	signUpClick(e, history){
		e.preventDefault();
		this.props.dispatch(fetchProfile());
		setTimeout(()=>history.push('/dashboard'), 3000);
	}

	cancelSignUp(e, history){
		e.preventDefault();
		this.props.dispatch(updateUserEntry('null'));
		history.push('/');
	}
	
	render(){
		return (
			<Route render={({history}) => (
		        <div className='sign-up'>
					<form>
						<label>Full Name</label>
						<div className='fullname'>
							<input type='text' name='first-name' placeholder='Enter first name' required />
							<input type='text' name='last-name' placeholder='Enter last name' required />
						</div>
						<label>Phone Number</label>
						<input type='tel' name='phone' placeholder='Enter number' required />
						<label>Email Address</label>
						<input type='email' name='email' placeholder='Enter email address' required />
						<label>Address</label>
						<div className='fulladdress'>
							<input type='text' name='street' placeholder='Street address' required />
							<input type='text' name='city' placeholder='City' required />
							<input type='text' name='state' placeholder='State' required />
							<input type='text' name='zip' placeholder='Zipcode' required />
						</div>
						<label>Username</label>
						<input type='text' name='username' placeholder='Enter preferred username' required />
						<label>Password</label>
						<input type='password' name='password' placeholder='Enter preferred password' required />
						<div className='sign-up-buttons'>
							<button onClick={(e) => this.cancelSignUp(e, history)}>Cancel</button>
							<button onClick={(e) => this.signUpClick(e, history)}>Complete Sign Up</button>
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

export default connect(mapStateToProps)(SignUp);