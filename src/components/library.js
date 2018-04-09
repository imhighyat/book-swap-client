import React from 'react';
import {connect} from 'react-redux';
import {deleteBook} from '../actions';

export class Library extends React.Component{
	handleDeleteBook(e, index){
		e.preventDefault();
		this.props.dispatch(deleteBook(index));
	}

	render(){
		if(this.props.userLibrary.length < 1){
			return (
				<div className='library'>
					<p>You do not have books to swap. Click the button below to start.</p>
					<button>Add book</button>
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
				<button>Add book</button>
			</div>
		);
	}
}

const mapStateToProps = state =>({
	userLibrary: state.userLibrary
});

export default connect(mapStateToProps)(Library);