import React from 'react';
import {connect} from 'react-redux';
import { updateBrowseModalView, resetOfferingUsers, sendSwapRequest } from './../../actions/browseTabActions';

export class UsersOffering extends React.Component{
	handleOkClick(e){
		e.preventDefault();
		this.props.dispatch(updateBrowseModalView(null));
		this.props.dispatch(resetOfferingUsers());
	}

	handleRequestClick(e, userId, myId, bookId){
		e.preventDefault();
		console.log(userId, myId, bookId);
		this.props.dispatch(sendSwapRequest(userId, myId, bookId));
	}

	render(){
		if(this.props.users === undefined && this.props.bookId === undefined){
			return(
				<div className='users-offering'>
					<h4>These are no users offering this book at the moment.</h4>
					<button onClick={ e => this.handleOkClick(e)}>
						<i className="far fa-check-circle"></i>
					</button>
				</div>
			);
		}
		else{
			const users = this.props.users.map((user, index) => {
				return (<li key={index}>
					<div className='users-offering-entry'>
						<p>{user.username}</p>
						<button onClick={ e => this.handleRequestClick(e, user._id, this.props.myId, this.props.bookId) }>Request</button>
					</div>
				</li>);
			});
			return(
				<div className='users-offering'>
					<img src={this.props.thumbnail} alt={`${this.props.title} book cover`} />
					<h4>{this.props.title}</h4>
					<h4>These are the users offering this book:</h4>
					<ul>{users}</ul>
					<button onClick={ e => this.handleOkClick(e)}>
						<i className="far fa-check-circle"></i>
					</button>
				</div>
			);
		}
	}
}

const mapStateToProps = state => ({
	users: state.browseReducer.offeringUsers.users,
	bookId: state.browseReducer.offeringUsers.bookId,
	thumbnail: state.browseReducer.offeringUsers.thumbnail,
	title: state.browseReducer.offeringUsers.title,
	myId: state.userProfileReducer.profileInfo.userId
});


export default connect(mapStateToProps)(UsersOffering);