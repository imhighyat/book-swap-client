import React from 'react';
import {connect} from 'react-redux';
import Loading from './loading';

export function Homepage(props) {
	return (
        <div className='homepage'>
        	Homepage placeholder
        	{props.loading && <Loading />}
        </div>
	);
}

const mapStateToProps = state => ({
	loading: state.loading
});

export default connect(mapStateToProps)(Homepage);