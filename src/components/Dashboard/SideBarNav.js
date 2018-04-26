import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { switchCurrentTab } from './../../actions/sideBarActions';
import { updateModalView } from './../../actions/libraryTabActions';
import { toggleAbout, toggleAuthenticated } from './../../actions/topNavActions';
import { updateSearchInfo } from './../../actions/browseTabActions';


export class SideBarNav extends React.Component{
	handleLogOut(e, history){
		e.preventDefault();
		history.push('/');
        this.props.dispatch(switchCurrentTab('profile'));
        this.props.dispatch(updateModalView(null));
        this.props.dispatch(toggleAbout(false));
        this.props.dispatch(updateSearchInfo({term: '', category: ''}));
        this.props.dispatch(toggleAuthenticated(false));
		//update the state with:
		//currentTab
		//get the state back to it's initial state
	}

	handleSwitchTab(e, tab){
		e.preventDefault();
		this.props.dispatch(switchCurrentTab(tab));
	}
	
    render(){
        return (
            <Route render={({history}) => (
                <div className='side-bar'>
                    <div className='side-bar-top'>
                        <a href='javascript:void(0)' onClick={ e => this.handleSwitchTab(e, 'profile') }>My Profile</a>
                        <a href='javascript:void(0)' onClick={ e => this.handleSwitchTab(e, 'browse') }>Browse</a>
                        <a href='javascript:void(0)' onClick={ e => this.handleSwitchTab(e, 'library') }>My Library</a>
                        <a href='javascript:void(0)' onClick={ e => this.handleSwitchTab(e, 'requests') }>Requests</a>
                    </div>
                    <div className='side-bar-bottom'>
                        <a href='/' 
                        	onClick={ e => this.handleLogOut(e, history) }>Log Out</a>
                    </div>
                </div>
            )}/>
        );
    }
}

const mapStateToProps = state => ({
	currentTab: state.userProfileReducer.currentTab
});

export default connect(mapStateToProps)(SideBarNav);