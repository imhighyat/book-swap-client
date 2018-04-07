import React from 'react';
import {connect} from 'react-redux';

import SignUp from './sign-up';
import LogIn from './log-in';

export class Forms extends React.Component {
	render(){
		console.log(this.props);
		return (
	        <div className='forms'>
	        	{ this.props.match.params.type === 'signup' && <SignUp /> }
	        	{ this.props.match.params.type === 'login' && <LogIn /> }
	        </div>
		);
	}
	
}

const mapStateToProps = state => ({
	userEntry: state.userEntry
});

export default connect(mapStateToProps)(Forms);