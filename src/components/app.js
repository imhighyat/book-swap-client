import React from 'react';

import TopNav from './top-nav';
import Homepage from './homepage';
import Dashboard from './dashboard';
import Forms from './forms';
import Loading from './loading';

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			authenticated: true,
			loading: false,
			userEntry: null,
			userInfo:{
				name: 'Hayat Mazz',
				email: 'email@me.com',
				address: '123 Main St',
				phone: '123456789',
				username: 'hayats',
				password: '*****'
			},
			currentTab: 'myprofile'
		};
		this.handleLinkClick = this.handleLinkClick.bind(this);
		this.completeLoading = this.completeLoading.bind(this);
		this.cancelEntry = this.cancelEntry.bind(this);
		this.switchTabs = this.switchTabs.bind(this);
	}

	switchTabs(e){
		e.preventDefault();
		const clickedTab = e.target.innerHTML.toLowerCase().split(' ').join('');	
		this.setState({ currentTab: clickedTab });
	}

	cancelEntry(e){
		this.setState({ userEntry: null });
	}

	completeLoading(){
		this.setState({ loading: false });
	}

	handleLinkClick(e){
		e.preventDefault();
		const clickedLink = e.target.innerHTML.toLowerCase().split(' ').join('');	
		if(clickedLink === 'signup' || clickedLink === 'login'){
			this.setState({ userEntry: clickedLink });
		}
		else if(clickedLink === 'demoaccount'){
			this.setState({ 
				authenticated: true, 
				loading: true,
				currentTab: 'myprofile' 
			});
		}
		else if(clickedLink === 'about'){
			this.setState({ 
				authenticated: false, 
				userEntry: null 
			});
		}	
	}

	render(){
		if(this.state.loading){
			return (
				<Loading completeLoading={this.completeLoading} />
			);
		}
		else{
			return (
		        <div className='app'>
		        	<TopNav 
		        		authenticated={this.state.authenticated} 
		        		onClick={this.handleLinkClick} />
		        	{ !this.state.authenticated && !this.state.userEntry && <Homepage /> }
		        	{ this.state.authenticated && <Dashboard currentTab={this.state.currentTab}
		        		switchTabs={this.switchTabs} 
		        		userInfo={this.state.userInfo} /> }
		        	{ this.state.userEntry && !this.state.authenticated && <Forms 
		        		userEntry={this.state.userEntry} 
		        		onCancel={this.cancelEntry} /> }
		        </div>
			);
		}
	}
}