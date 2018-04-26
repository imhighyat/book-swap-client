import React from 'react';
import {connect} from 'react-redux';
import SearchFilter from './SearchFilter';
import NoResult from './NoResult';
import SearchResults from './SearchResults';
import BookInfo from './BookInfo';
import UsersOffering from './UsersOffering';

export class Browse extends React.Component{
	render(){
		return(
			<div className='browse'>
				<SearchFilter />
				{ !this.props.currentSearch.term && 
					<p>Start your search by selecting a category from the dropdown, enter your term and click on Submit.</p> }
				{ !this.props.totalItems && 
					this.props.currentSearch.term &&
						<NoResult /> }
				{ this.props.results.length > 0 && <SearchResults /> }
				{ this.props.modalView === 'book info' && <BookInfo /> }
				{ this.props.modalView === 'users offering' && <UsersOffering /> }
			</div>
		);
	}
}

const mapStateToProps = state =>({
	currentSearch: state.browseReducer.currentSearch,
	results: state.browseReducer.results,
	totalItems: state.browseReducer.totalItems,
	pageNumber: state.browseReducer.pageNumber,
	modalView: state.browseReducer.modalView
});

export default connect(mapStateToProps)(Browse);

//Pagination
//BookInfoView
//UsersOfferingView
//<p>Start your search by selecting a category from the dropdown, type your term and click on Submit.</p>