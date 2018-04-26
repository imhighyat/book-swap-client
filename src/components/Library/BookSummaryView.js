import React from 'react';
import {connect} from 'react-redux';
import { updateModalView } from './../../actions/libraryTabActions';

export class BookSummaryView extends React.Component{
	handleOkClick(e){
		e.preventDefault();
		this.props.dispatch(updateModalView(null));
	}

	render(){
		return(
			<div className='book-summary-view'>
				<img src={this.props.bookOnView.thumbnail} alt={`${this.props.bookOnView.title} book cover`} />
				<h4>{this.props.bookOnView.title}</h4>
		        <h4>{this.props.bookOnView.author.join(', ')}</h4>
				<p>{this.props.bookOnView.summary}</p>
				<button onClick={ e => this.handleOkClick(e)}>
					<i className="far fa-check-circle"></i>
				</button>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	bookOnView: state.libraryReducer.bookOnView
});

export default connect(mapStateToProps)(BookSummaryView);