import React from 'react';

export default function Profile(props) {
	return (
        <div className='profile'>
        	<p>{props.userInfo.name}</p>
        	<p>{props.userInfo.email}</p>
        	<p>{props.userInfo.address}</p>
        	<p>{props.userInfo.phone}</p>
        	<p>{props.userInfo.username}</p>
        	<p>{props.userInfo.password}</p>
        </div>
	);
}