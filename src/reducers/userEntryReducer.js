const initialState = {
	authenticated: false,
	loading: false,
	about: false
};

const userEntryReducer = (state = initialState, action) => {
	switch(action.type) {
	    case 'TOGGLE_ABOUT':
	    	return {
		        ...state,
		        about: action.status
      		}
      	case 'TOGGLE_AUTHENTICATED':
	    	return {
		        ...state,
		        authenticated: action.status
      		}
    	default:
      		return state;
  	}
}

export default userEntryReducer;