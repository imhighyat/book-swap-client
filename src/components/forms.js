import React from 'react';
import {connect} from 'react-redux';

import SignUp from './sign-up';
import LogIn from './log-in';

export class Forms extends React.Component {
	render(){
		return (
	        <div className='forms'>
	        	{ this.props.userEntry === 'signup' && <SignUp /> }
	        	{ this.props.userEntry === 'login' && <LogIn /> }
	        </div>
		);
	}
	
}

const mapStateToProps = state => ({
	userEntry: state.userEntry
});

export default connect(mapStateToProps)(Forms);