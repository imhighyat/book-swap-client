const initialState = {
	currentTab: 'profile',
	profileInfo: {
		userId: '',
        name: '',
        address: {
            street: '',
            city: '',
            state: '',
            zip: ''
        },
        email: '',
        phoneNumber: '',
        username: '',
        password: ''
    },
    editing: null
};

const userProfileReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'CANCEL_EDIT':
	    	return {
		        ...state,
		        editing: null
      		}
		case 'EDIT_PROFILE':
	    	return {
		        ...state,
		        editing: action.target
      		}
		case 'SWITCH_CURRENT_TAB':
	    	return {
		        ...state,
		        currentTab: action.tab
      		}
	    case 'TOGGLE_ABOUT':
	    	return {
		        ...state,
		        about: action.status
      		}
      	case 'UPDATE_USER_SUCCESS':
	    	return {
		        ...state,
		        profileInfo: action.payload,
		        editing: null
      		}
      	case 'FETCH_USER':
      		return {
		        ...state,
		        profileInfo: action.payload
      		}
      	case 'FETCH_USER_SUCCESS':
      		return {
		        ...state,
		        profileInfo: action.payload
      		}

    	default:
      		return state;
  	}
}

export default userProfileReducer;