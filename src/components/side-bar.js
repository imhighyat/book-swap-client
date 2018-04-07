import React from 'react';
import {connect} from 'react-redux';
import {switchTab, logOutClick} from '../actions';

export class SideBar extends React.Component{
    handleTabSwitch(e, tab){
        e.preventDefault();
        this.props.dispatch(switchTab(tab));
    }

    logOutClick(e){
        e.preventDefault();
        this.props.dispatch(logOutClick());
    }

    render(){
        return (
            <div className='side-bar'>
                <div className='side-bar-top'>
                    <a href='#' onClick={(e) => this.handleTabSwitch(e, 'profile')} >My Profile</a>
                    <a href='#' onClick={(e) => this.handleTabSwitch(e, 'browse')} >Browse</a>
                    <a href='#' onClick={(e) => this.handleTabSwitch(e, 'library')} >My Library</a>
                    <a href='#' onClick={(e) => this.handleTabSwitch(e, 'requests')} >Requests</a>
                </div>
                <div className='side-bar-bottom'>
                    <a href='#' onClick={(e) => this.logOutClick(e)} >Log Out</a>
                </div>
            </div>
        );
    }
}


//need currentTab to style which one is currently active

const mapStateToProps = state => ({
    currentTab: state.currentTab
});

export default connect(mapStateToProps)(SideBar);