import React from 'react';
import {connect} from 'react-redux';
import EmptyLibrary from './EmptyLibrary';
import BookList from './BookList';
import AddButtonContainer from './AddButtonContainer';
import AddBookView from './AddBookView';
import BookSummaryView from './BookSummaryView';
import { fetchMyLibrary } from './../../actions/libraryTabActions';

export class Library extends React.Component{
	componentDidMount(){
		this.props.dispatch(fetchMyLibrary());
	}

	render(){
		return(
			<div className='library'>
				{ this.props.library.length <= 0 && <EmptyLibrary /> }
				{ this.props.library.length > 0 && <BookList /> }
				<AddButtonContainer />
				{ this.props.modalView === 'add book' && <AddBookView /> }
				{ this.props.modalView === 'book summary' && <BookSummaryView /> }
			</div>
		);
	}
}

const mapStateToProps = state =>({
	library: state.libraryReducer.library,
	modalView: state.libraryReducer.modalView
});

export default connect(mapStateToProps)(Library);