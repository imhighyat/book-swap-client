import React from 'react';

export default function TopNav(props) {
	return (
        <div className='top-nav'>
        	{ !props.authenticated && <a href='#' onClick={props.onClick}>Sign Up</a> }
        	{ !props.authenticated && <a href='#' onClick={props.onClick}>Log In</a> }
        	<a href='#' onClick={props.onClick}>BookSwap</a>
        	{ !props.authenticated && <a href='#' onClick={props.onClick}>Demo Account</a> }
        	{ !props.authenticated && <a href='#' onClick={props.onClick}>About</a> }
        </div>
	);
}