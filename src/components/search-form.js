import React from 'react';

export default function SearchForm() {
	return (
        <div className='search-form'>
        	<select>
        		<option value='isbn' default>ISBN</option>
				<option value='title'>Book Title</option>
				<option value='author'>Author</option>
        	</select>
        	<input placeholder='Enter your search term' />
        	<button>Search</button>
        </div>
	);
}