import React from 'react';
import {connect} from 'react-redux';
import { updateBrowseModalView,resetBookInfo } from './../../actions/browseTabActions';

export class BookInfo extends React.Component{
	handleOkClick(e){
		e.preventDefault();
		this.props.dispatch(updateBrowseModalView(null));
		this.props.dispatch(resetBookInfo());
	}

	render(){
		return(
			<div className='book-info'>
				<img src={this.props.bookInfo.thumbnail} alt={`${this.props.bookInfo.title} book cover`} />
				<h4>{this.props.bookInfo.title}</h4>
		        <h4>{this.props.bookInfo.author.join(', ')}</h4>
				<p>{this.props.bookInfo.summary}</p>
				<button onClick={ e => this.handleOkClick(e)}>
					<i className="far fa-check-circle"></i>
				</button>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	bookInfo: state.browseReducer.bookInfo
});


export default connect(mapStateToProps)(BookInfo);