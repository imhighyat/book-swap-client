import React from 'react';
import {connect} from 'react-redux';
import { updateSearchInfo, performSearch } from './../../actions/browseTabActions';

export class SearchFilter extends React.Component{
	handleSearch(e){
		e.preventDefault();
		const searchInfo = {
			term: this.refs.search.value,
			category: this.category.value
		};
        if(searchInfo.term){
            this.refs.search.value = '';
            this.props.dispatch(updateSearchInfo(searchInfo));
            this.props.dispatch(performSearch(searchInfo.category, searchInfo.term));
        }
	}

	render(){
		return(
			<div className='search-filter'>
				<select ref={input=> this.category = input}>
                    <option value='isbn' default>ISBN</option>
                    <option value='title'>Book Title</option>
                    <option value='author'>Author</option>
                </select>
                <input placeholder='Enter your search term' ref='search'/>
                <button onClick={e=> this.handleSearch(e)} >Search</button>
			</div>
		);
	}
}

export default connect()(SearchFilter);