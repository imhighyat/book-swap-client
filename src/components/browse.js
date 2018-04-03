import React from 'react';
import SearchForm from './search-form';
import BrowseResults from './browse-results';
import Pagination from './pagination';

export default function Browse() {
	return (
        <div className='browse'>
        	<SearchForm />
        	<BrowseResults />
        	<Pagination />
        </div>
	);
}