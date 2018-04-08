import React from 'react';
import {connect} from 'react-redux';
import {showBookInfo, showUsersOffering} from '../actions';

export class BrowseResults extends React.Component{
	bookInfoClick(e, isbn){
		e.preventDefault();
		this.props.dispatch(showBookInfo(isbn));
	}

	usersOfferingClick(e, isbn){
		e.preventDefault();
		this.props.dispatch(showUsersOffering(isbn));
	}

	render(){
		if(this.props.totalItems){
			const resultList = this.props.results.map((list, index) => {
				return (<li key={list.isbn}>
					<div>
						<img src='https://uploads.scratch.mit.edu/users/avatars/31396620.png' />
						<h4>{list.title}</h4>
						<p>{list.author}</p>
						<div className='book-links'>
							<a href="#" onClick={(e,isbn) => this.bookInfoClick(e, list.isbn)}>Book Info</a>
							<a href="#" onClick={(e,isbn) => this.usersOfferingClick(e, list.isbn)}>Users Offering</a>
						</div>
					</div>
				</li>)
			});

			return (
		        <div className='browse-results'>
		        	<ul>{resultList}</ul>            
		        </div>
			);
		}
		return (
		    <div className='browse-results'>
		    	<p>Your search results will appear here.</p>            
		    </div>
		);
	}
}

const mapStateToProps = state => ({
	results: state.browse.results,
	totalItems: state.browse.totalItems
});

export default connect(mapStateToProps)(BrowseResults);