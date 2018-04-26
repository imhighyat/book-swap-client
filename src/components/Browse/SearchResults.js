import React from 'react';
import {connect} from 'react-redux';
import { updateBrowseModalView, updateBookInfo, updateUsersOffering } from './../../actions/browseTabActions';

export class SearchResults extends React.Component{
	handleClickInfo(e, list){
		e.preventDefault();
		this.props.dispatch(updateBookInfo(list));
		this.props.dispatch(updateBrowseModalView('book info'));
	}

	handleUsersInfo(e, list){
		e.preventDefault();
		this.props.dispatch(updateUsersOffering(list.isbn[0], this.props.userId, list.bookId, list.thumbnail, list.title));
		this.props.dispatch(updateBrowseModalView('users offering'));
	}

	render(){
		const resultList = this.props.results.map((list, index) => {
			return (<li key={`${index}-${list.isbn[0]}`}>
				<div className='search-results-entry'>
					<img src={list.thumbnail} alt={`${list.title} book cover`}/>
					<h4>{list.title}</h4>
					<p>{list.author.join(', ')}</p>
					<div className='book-links'>
						<button onClick={e => this.handleClickInfo(e, list)}>Book Info</button>
						<button onClick={e => this.handleUsersInfo(e, list)}>Users Offering</button>
					</div>
				</div>
			</li>)
		});

		return (
	        <div className='search-results'>
	        	<ul>{resultList}</ul>            
	        </div>
		);
	}
}

const mapStateToProps = state => ({
	results: state.browseReducer.results,
	userId: state.userProfileReducer.profileInfo.userId
});

export default connect(mapStateToProps)(SearchResults);