import React from 'react';

export default function SideBar(props) {
	return (
        <div className='side-bar'>
        	<div className='side-bar-top'>
        		<a href='#' onClick={props.switchTabs}>My Profile</a>
        		<a href='#' onClick={props.switchTabs}>Browse</a>
        		<a href='#' onClick={props.switchTabs}>My Library</a>
        		<a href='#' onClick={props.switchTabs}>Requests</a>
        	</div>
        	<div className='side-bar-bottom'>
        		<a href='#'>Log Out</a>
        	</div>
        </div>
	);
}