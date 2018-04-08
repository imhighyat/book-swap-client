import React from 'react';
import {connect} from 'react-redux';

import SearchForm from './search-form';
import BrowseResults from './browse-results';
import Pagination from './pagination';
import BookView from './book-view';

export function Browse(props) {
	return (
        <div className='browse'>
        	<SearchForm />
        	<BrowseResults />
        	{props.totalItems > 10 && <Pagination /> }
        	{props.bookView && <BookView /> }
        </div>
	);
}

const mapStateToProps = state => ({
	totalItems: state.browse.totalItems,
	bookView: state.bookView
});

export default connect(mapStateToProps)(Browse);