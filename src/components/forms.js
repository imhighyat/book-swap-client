import React from 'react';
import SignUp from './sign-up';
import LogIn from './log-in';

export default function Forms(props) {
	const form = props.userEntry === 'signup' ? (
			<SignUp onCancel={props.onCancel} />
		) : (
			<LogIn onCancel={props.onCancel} />
		);
	return (
        <div className='forms'>
        	{ form }
        </div>
	);
}