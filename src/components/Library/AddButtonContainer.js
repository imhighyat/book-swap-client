import React from 'react';
import {connect} from 'react-redux';
import { updateModalView } from './../../actions/libraryTabActions';

export class AddButtonContainer extends React.Component{
	handleAddClick(e){
		e.preventDefault();
		this.props.dispatch(updateModalView('add book'));
	}

	render(){
		return(
			<div className='add-button-container'>
				<button onClick={ e => this.handleAddClick(e) }> Add a book </button>
			</div>
		);
	}
}

export default connect()(AddButtonContainer);