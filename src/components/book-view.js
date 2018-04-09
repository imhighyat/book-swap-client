import React from 'react';
import {connect} from 'react-redux';
import {closeBookView} from '../actions';

export class BookView extends React.Component{
	handleClose(e){
		e.preventDefault();
		this.props.dispatch(closeBookView());
	}

	render(){
		if(this.props.bookView === 'users'){
			const usersList = this.props.viewingUsersOffering.map((user, index) => {
				return (<li key={index}>
					{user}
				</li>);
			});
			return (
		        <div className='book-view-users'>
		        	<img src={this.props.viewingBookInfo.thumbnail} />
		        	<ul>{usersList}</ul>
		        	<button onClick={e=>this.handleClose(e)}>Close</button>
		        </div>
			);
		}
		return (
	        <div className='book-view-info'>
	        	<img src={this.props.viewingBookInfo.thumbnail} />
	        	<h3>{this.props.viewingBookInfo.title}</h3>
	        	<h4>{this.props.viewingBookInfo.author}</h4>
	        	<p>{this.props.viewingBookInfo.summary}</p>
	        	<button onClick={e=>this.handleClose(e)}>Close</button>
	        </div>
		);
	}
}

const mapStateToProps = state => ({
	bookView: state.bookView,
	viewingBookInfo: state.viewingBookInfo,
	viewingUsersOffering: state.viewingUsersOffering
});

export default connect(mapStateToProps)(BookView);
