import React from 'react';
import {connect} from 'react-redux';
import {cancelRequest} from '../actions';

export class RequestsList extends React.Component{
	handleCancelClick(e, index){
		e.preventDefault();
		this.props.dispatch(cancelRequest(index));
	}
	
	//handleEdit todo

	render(){
		//map through the list and only return requests that
		//have origin matching the filter
		const requestsList = this.props.requests.map((list, index) => {
			if(this.props.currentRequestsFilter === 'all'){
				return(
					<li key={index}>
						<div className='request-date'>
							<p>{list.date}</p>
						</div>
						<div className='book-name'>
							<p>{list.book}</p>
						</div>
						<div className='origin'>
							<p>{list.origin}</p>
						</div>
						<div className='status'>
							<p>{list.status}</p>
						</div>
						<div className='buttons'>
							{list.status === 'pending' && 
								list.origin === 'me' && 
									<button onClick={e=>this.handleCancelClick(e, index)}><i className="far fa-times-circle"></i>Cancel</button>}
							{list.status === 'pending' && 
								list.origin === 'others' && 
									<button><i className="fas fa-edit"></i></button>}
						</div>
					</li>
				);
			}
			else{
				if(list.origin === this.props.currentRequestsFilter){
					return(
						<li key={index}>
							<div className='request-date'>
								<p>{list.date}</p>
							</div>
							<div className='book-name'>
								<p>{list.book}</p>
							</div>
							<div className='origin'>
								<p>{list.origin}</p>
							</div>
							<div className='status'>
								<p>{list.status}</p>
							</div>
							<div className='buttons'>
								{list.status === 'pending' && 
									list.origin === 'me' && 
										<button onClick={e=>this.handleCancelClick(e, index)}><i className="far fa-times-circle"></i>Cancel</button>}
								{list.status === 'pending' && 
									list.origin === 'others' && 
										<button><i className="fas fa-edit"></i></button>}
							</div>
						</li>
					);
				}
			}
		});

		return(
			<div className='requests'>
				<ul>{requestsList}</ul>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	requests: state.requests,
	currentRequestsFilter: state.currentRequestsFilter
});

export default connect(mapStateToProps)(RequestsList);