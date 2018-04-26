import React from 'react';
import { connect } from 'react-redux';

export default function EmptyLibrary(){
	return(
        <div className='empty-library'>
        	<p>You do not have books to swap. Click the button below to start. </p>
        </div>
	);
}