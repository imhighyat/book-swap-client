import React from 'react';
import SideBar from './side-bar';
import MainContent from './main-content';

export default function Dashboard() {
	return (
        <div className='dashboard'>
        	<SideBar />
        	<MainContent />
        </div>
	);
}