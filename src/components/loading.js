import React from 'react';

export default class Loading extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		console.log('mounted');
		setTimeout(this.props.completeLoading, 3000)
	}

	render(){
		return (
	        <div className='loading'>
	        	Loading
	        </div>
		);
	}
}