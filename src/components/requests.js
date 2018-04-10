import React from 'react';
import {connect} from 'react-redux';
import {switchTab} from '../actions';

import RequestsFilter from './requests-filter';
import RequestsList from './requests-list';
import Pagination from './pagination';

export class Requests extends React.Component{
	handleBrowseClick(e){
		e.preventDefault();
		this.props.dispatch(switchTab('browse'));
	}

	render(){
		return(
			<div className='requests'>
				<RequestsFilter />
				<RequestsList />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	requests: state.requests
});

export default connect(mapStateToProps)(Requests);
