import React from 'react';
import {connect} from 'react-redux';
import {deleteBook, showAddBookView, hideAddBookView, addBook} from '../actions';

export class Library extends React.Component{
	handleDeleteBook(e, index){
		e.preventDefault();
		this.props.dispatch(deleteBook(index));
	}

	showAddBook(e){
		e.preventDefault();
		this.props.dispatch(showAddBookView());
	}

	hideAddBook(e){
		e.preventDefault();
		this.props.dispatch(hideAddBookView());
	}

	addBookToLibrary(e){
		e.preventDefault();
		const isbn = this.refs.isbn.value;
		if(isbn){
			console.log(isbn);
			this.refs.isbn.value = '';
			return this.props.dispatch(addBook(isbn));
		}
		console.log('no value');
	}

	render(){
		if(this.props.userLibrary.length < 1){
			return (
				<div className='library'>
					<p>You do not have books to swap. Click the button below to start. </p>
					<button onClick={e=>this.showAddBook(e)}>Add book</button>
					{this.props.addBookView === 'show' && <div className='add-book-modal'>
						<p>Please enter the ISBN of the book you want to add. On most books, the ISBN number can be found on the back cover, next to the barcode.</p>
						<input ref='isbn' />
						<button onClick={e=> this.hideAddBook(e)}>Cancel</button>
						<button onClick={e=> this.addBookToLibrary(e)}>Add</button>
					</div> }
				</div>
			);
		}
		const bookList = this.props.userLibrary.map((entry, index) => {
			const position = index;
			return (<li key={index}>
					<div className={`bookEntry ${entry.status}`}>
						<img src={entry.thumbnail}/>
		        		<h4>{entry.title}</h4>
		        		<h4>{entry.author}</h4>
		        		<h4>{entry.isbn}</h4>
		        		<p>{entry.summary}</p>	
		        		<button onClick={(e, index)=>this.handleDeleteBook(e, position)}><i className="far fa-times-circle"></i></button>
					</div>
				</li>
			);
		});

		return (
			<div className='library'>
				<ul>{bookList}</ul>
				<button onClick={e=>this.showAddBook(e)}>Add book</button>
				{this.props.addBookView === 'show' && <div className='add-book-modal'>
					<p>Please enter the ISBN of the book you want to add. On most books, the ISBN number can be found on the back cover, next to the barcode.</p>
					<input ref='isbn' />
					<button onClick={e=> this.hideAddBook(e)}>Cancel</button>
					<button onClick={e=> this.addBookToLibrary(e)}>Add</button>
				</div> }
			</div>
		);
	}
}

const mapStateToProps = state =>({
	userLibrary: state.userLibrary,
	addBookView: state.addBookView
});

export default connect(mapStateToProps)(Library);