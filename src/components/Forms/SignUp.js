import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Loading from './../HomePage/LoadingModal';
//import actions here for complete signup

export class SignUp extends React.Component {
	handleCancelClick(e, history){
		e.preventDefault();
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
							<button onClick={ e => this.handleCancelClick(e, history) }>Cancel</button>
							<button>Complete Sign Up</button>
						</div>
					</form>
					{this.props.loading && <Loading />}
		        </div>
		    )}/>
		);
	}
}

const mapStateToProps = state => ({
	loading: state.userEntryReducer.loading
});

export default connect(mapStateToProps)(SignUp);