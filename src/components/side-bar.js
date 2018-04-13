
import React from 'react';
import {connect} from 'react-redux';
import {Route, Link} from 'react-router-dom';
import {switchTab, logOutClick} from '../actions';

export class SideBar extends React.Component{
    handleTabSwitch(e, tab){
        e.preventDefault();
        this.props.dispatch(switchTab(tab));
    }

    logOutClick(e, history){
        e.preventDefault();
        this.props.dispatch(logOutClick());
        history.push('/');
    }

    render(){
        return (
            <Route render={({history}) => (
                <div className='side-bar'>
                    <div className='side-bar-top'>
                        <a href='#' onClick={(e) => this.handleTabSwitch(e, 'profile')} >My Profile</a>
                        <a href='#' onClick={(e) => this.handleTabSwitch(e, 'browse')} >Browse</a>
                        <a href='#' onClick={(e) => this.handleTabSwitch(e, 'library')} >My Library</a>
                        <a href='#' onClick={(e) => this.handleTabSwitch(e, 'requests')} >Requests</a>
                    </div>
                    <div className='side-bar-bottom'>
                        <a href='/' onClick={(e) => this.logOutClick(e, history)} >Log Out</a>
                    </div>
                </div>
            )}/>
        );
    }
}

const mapStateToProps = state => ({
    currentTab: state.currentTab
});

export default connect(mapStateToProps)(SideBar);