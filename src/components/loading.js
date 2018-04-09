import React from 'react';
import {connect} from 'react-redux';
import {loadingOff} from '../actions';

export class Loading extends React.Component{
	render(){
		return (
	        <div className='loading'>
	        	Loading Icon
	        </div>
		);
	}
}

export default connect()(Loading);

/* 1. needs to create code for setting the loading status
to false after data has been received from the API
2. create the loading animation
*/