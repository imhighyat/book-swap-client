import { API_BASE_URL, USER_ID } from '../config';

export const CANCEL_EDIT = 'CANCEL_EDIT';
export const cancelEdit = () => ({
  type: CANCEL_EDIT
});

export const EDIT_PROFILE = 'EDIT_PROFILE';
export const editProfile = target => ({
  type: EDIT_PROFILE,
  target
});

export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const fetchUser = () => dispatch => {
	let payload = {
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
	};
	//make sure that the state is clear
	dispatch({
		type: FETCH_USER,
		payload
	});
	//API call
	fetch(`${API_BASE_URL}/users/${USER_ID}`)
	.then(res => {
		if(!res.ok){
			return Promise.reject(res.statusText);
		}
		return res.json();
	})
	.then(user => {
		payload = {
			userId: user._id,
	        name: `${user.name.firstName} ${user.name.lastName}`,
	        address: {
	            street: user.address.street,
	            city: user.address.city,
	            state: user.address.state,
	            zip: user.address.zip
	        },
	        email: user.email,
	        phoneNumber: user.phoneNumber,
	        username: user.username,
        	password: user.password
		};
		dispatch({
			//success dispatch
			type: FETCH_USER_SUCCESS,
			payload
		});
	})
	.catch(err => {
		//error dispatch
		dispatch({ type: FETCH_USER_ERROR });
	});
};

export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';
export const updateUser = (target, value) => dispatch => {
	fetch(`${API_BASE_URL}/users/${USER_ID}`,
		{
			method: 'PUT',
			body: JSON.stringify({
				id: USER_ID,
				[target]: value
			}),
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    }
		}
	)
	.then(res => {
		if(!res.ok){
			return Promise.reject(res.statusText);
		}
		return res.json();
	})
	.then(user => {
		const payload = {
			userId: user._id,
	        name: `${user.name.firstName} ${user.name.lastName}`,
	        address: {
	            street: user.address.street,
	            city: user.address.city,
	            state: user.address.state,
	            zip: user.address.zip
	        },
	        email: user.email,
	        phoneNumber: user.phoneNumber,
	        username: user.username,
        	password: user.password
		};
		dispatch({
			type: UPDATE_USER_SUCCESS,
			payload
		});
	})
	.catch(err => {
		dispatch({ type: UPDATE_USER_ERROR });
	});
};