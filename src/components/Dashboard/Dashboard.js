import React from 'react';
import { connect } from 'react-redux';
import MainContent from './MainContent';
import SideBarNav from './SideBarNav';
import AboutUs from './../HomePage/AboutUs';

export class Dashboard extends React.Component{
	render(){
		return(
	        <div className='dashboard'>
	        	<SideBarNav />
	        	<MainContent />
	        	{ this.props.about && <AboutUs /> }
	        </div>
		);
	}
}

const mapStateToProps = state => ({
	about: state.userEntryReducer.about
});

export default connect(mapStateToProps)(Dashboard);