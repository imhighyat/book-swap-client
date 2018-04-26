import React from 'react';
import {connect} from 'react-redux';
import { updateModalView, addBook } from './../../actions/libraryTabActions';

export class AddBookView extends React.Component{
	handleCancel(e){
		e.preventDefault();
		this.props.dispatch(updateModalView(null));
		this.refs.isbn.value = '';
	}

	handleAddBook(e){
		e.preventDefault();
		const value = this.refs.isbn.value;
        if(value){
        	console.log(value);
            this.props.dispatch(addBook(value));
            this.refs.isbn.value = '';
        }
	}

	render(){
		return(
			<div className='add-book-view'>
				<h3>Enter the book's ISBN:</h3>
				<input ref='isbn' />
				<div className='add-book-view-buttons'>
					<button onClick={ e => this.handleCancel(e) }><i className="far fa-times-circle"></i></button> 
					<button onClick={ e => this.handleAddBook(e) }><i className="far fa-check-circle"></i></button> 
				</div>
			</div>
		);
	}
}

export default connect()(AddBookView);

