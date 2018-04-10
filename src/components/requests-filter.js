import React from 'react';
import {connect} from 'react-redux';
import {switchResultsFilter} from '../actions';

export class RequestsFilter extends React.Component{
	handleLinkClick(e, filter){
		e.preventDefault();
		this.props.dispatch(switchResultsFilter(filter));
	}

	render(){
		return(
			<div className='requests'>
				<ul>
					<a href='#' onClick={e=>this.handleLinkClick(e, 'all')}><li>All Requests</li></a>
					<a href='#' onClick={e=>this.handleLinkClick(e, 'me')}><li>From Me</li></a>
					<a href='#' onClick={e=>this.handleLinkClick(e, 'others')}><li>To Me</li></a>
				</ul>
			</div>
		);
	}
}

//use currentFilter to style the links

const mapStateToProps = state => ({
	currentFilter: state.currentRequestsFilter
});

export default connect(mapStateToProps)(RequestsFilter);