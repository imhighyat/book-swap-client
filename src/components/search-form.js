import React from 'react';
import {connect} from 'react-redux';
import {searchClick} from '../actions';

export class SearchForm extends React.Component{
    handleSearch(e){
        e.preventDefault();
        const term = this.refs.search.value;
        if(term){
            this.refs.search.value = '';
            this.props.dispatch(searchClick(this.category.value, term));
        }
    }

    render(){
        return (
            <div className='search-form'>
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

export default connect()(SearchForm);