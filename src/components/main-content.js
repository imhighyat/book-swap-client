import React from 'react';
import {connect} from 'react-redux';

import Profile from './profile';
import Browse from './browse';
import Library from './library';
import Requests from './requests';

export function MainContent(props){
		return (
	        <div className='main-content'>
	        	{ props.currentTab === 'profile' && <Profile /> }
	        	{ props.currentTab === 'browse' && <Browse /> }
	        	{ props.currentTab === 'library' && <Library /> }
	        	{ props.currentTab === 'requests' && <Requests /> }
	        </div>
		);
}

const mapStateToProps = state => ({
	currentTab: state.currentTab
});

export default connect(mapStateToProps)(MainContent);

