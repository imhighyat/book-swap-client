import React from 'react';
import Profile from './profile';
import Browse from './browse';

export default function MainContent(props) {
	return (
        <div className='main-content'>
        	{props.currentTab === 'myprofile' && <Profile currentTab={props.currentTab}
        		userInfo={props.userInfo} /> }
        	{props.currentTab === 'browse' && <Browse /> }
        </div>
	);
}