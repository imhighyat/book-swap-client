import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Loading from './../HomePage/LoadingModal';
//import actions here for complete login

export class LogIn extends React.Component {
	handleCancelClick(e, history){
		e.preventDefault();
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
							required />
						<label>Password</label>
						<input type='password' 
							name='password' 
							placeholder='Enter Password' 
							required />
						<div className='log-in-buttons'>
							<button onClick={ e => this.handleCancelClick(e, history) }>Cancel</button>
							<button >Log In</button>
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

export default connect(mapStateToProps)(LogIn);