import React from 'react';
import { connect } from 'react-redux';
import { toggleAbout } from './../../actions/topNavActions';

export class AboutUs extends React.Component {
	closeAboutUs(e){
		e.preventDefault();
		this.props.dispatch(toggleAbout(false));
	}

	render(){
		return(
	        <div className='about-us'>
	        	<div className='about-us-card'>
	        		About us placeholder
	        		<button onClick={ e => this.closeAboutUs(e) }>Close</button>
	        	</div>
	        </div>
		);
	}
}

export default connect()(AboutUs);