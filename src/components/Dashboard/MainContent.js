import React from 'react';
import { connect } from 'react-redux';
import Profile from './../Profile/Profile';
import Library from './../Library/Library';
import Browse from './../Browse/Browse';

export function MainContent(props){
	return(
        <div className='main-content'>
        	{ props.currentTab === 'profile' && <Profile /> }
        	{ props.currentTab === 'browse' && <Browse /> }
        	{ props.currentTab === 'library' && <Library /> }
        </div>
	);
}

const mapStateToProps = state => ({
	currentTab: state.userProfileReducer.currentTab
});

export default connect(mapStateToProps)(MainContent);