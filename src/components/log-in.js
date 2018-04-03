import React from 'react';

export default function LogIn(props) {
	return (
        <div className='log-in'>
        	<form>
				<label>Username</label>
				<input type='text' name='username' placeholder='Enter Username' required />
				<label>Password</label>
				<input type='password' name='password' placeholder='Enter Password' required />
				<div className='log-in-buttons'>
					<button type='button' onClick={props.onCancel}>Cancel</button>
					<button>Log In</button>
				</div>
            </form>
        </div>
	);
}