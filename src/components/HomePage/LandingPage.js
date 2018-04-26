import React from 'react';
import { connect } from 'react-redux';
import Loading from './LoadingModal';
import AboutUs from './AboutUs';

export function LandingPage(props) {
	return (
        <div className='landing-page'>
        	Homepage placeholder
        	{ props.loading && <Loading /> }
        	{ props.about && <AboutUs /> }
        </div>
	);
}

const mapStateToProps = state => ({
	loading: state.userEntryReducer.loading,
	about: state.userEntryReducer.about
});

export default connect(mapStateToProps)(LandingPage);