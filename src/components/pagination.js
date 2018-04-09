import React from 'react';
import {connect} from 'react-redux';
import {paginationClick} from '../actions';

export class Pagination extends React.Component{
	handleClick(e, button){
		e.preventDefault();
		this.props.dispatch(paginationClick(button));
	}

	render(){
		return (
	        <div className='pagination'>
	        	{this.props.pageNumber > 1 && 
	        		<button onClick={(e)=> this.handleClick(e, 'prev')}>Prev</button>}
	        	{this.props.totalItems > this.props.pageNumber * 10 && 
	        		<button onClick={(e)=> this.handleClick(e, 'next')}>Next</button>}
	        </div>
		);
	}
}

const mapStateToProps = state => ({
	totalItems: state.browse.totalItems,
	pageNumber: state.browse.pageNumber
});

export default connect(mapStateToProps)(Pagination);