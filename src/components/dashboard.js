import React from 'react';
import SideBar from './side-bar';
import MainContent from './main-content';

export default function Dashboard(props) {
	return (
        <div className='dashboard'>
        	<SideBar currentTab={props.currentTab} 
        		switchTabs={props.switchTabs} />
        	<MainContent currentTab={props.currentTab}
        		userInfo={props.userInfo} />
        </div>
	);
}