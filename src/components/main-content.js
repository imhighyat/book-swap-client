import React from 'react';
import {connect} from 'react-redux';

import Profile from './profile';
import Browse from './browse';

export function MainContent(props){
		return (
	        <div className='main-content'>
	        	{ props.currentTab === 'profile' && <Profile /> }
	        	{ props.currentTab === 'browse' && <Browse /> }
	        </div>
		);
}

const mapStateToProps = state => ({
	currentTab: state.currentTab
});

export default connect(mapStateToProps)(MainContent);

