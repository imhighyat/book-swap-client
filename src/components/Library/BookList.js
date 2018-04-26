import React from 'react';
import { connect } from 'react-redux';
import { deleteBook, updateModalView, updateBookOnView } from './../../actions/libraryTabActions';

export class BookList extends React.Component{
	handleRemoveBook(e, bookId){
		e.preventDefault();
		this.props.dispatch(deleteBook(bookId));
	}

	handleViewSummary(e, book){
		e.preventDefault();
		this.props.dispatch(updateBookOnView(book));
		this.props.dispatch(updateModalView('book summary'));
	}

	render(){
		const list = this.props.library.map((entry, index) => {
			return (<li key={entry.bookId}>
					<div className={`bookEntry ${entry.hasPendingRequest}`}>
						<img src={entry.thumbnail} alt={`${entry.title} book cover`} />
		        		<h4>{entry.title}</h4>
		        		<div>
		        			<button onClick={ e => this.handleRemoveBook(e, entry.bookId) }>
			        			<i className="far fa-times-circle"></i>
			        		</button>
			        		<button onClick={ e=> this.handleViewSummary(e, entry)}>
			        			Book Summary
			        		</button>
		        		</div>
					</div>
				</li>
			);
		});

		return(
	        <div className='book-list'>
	        	<ul>{list}</ul>
	        </div>
		);
	}
}

const mapStateToProps = state =>({
	library: state.libraryReducer.library,
});

export default connect(mapStateToProps)(BookList);