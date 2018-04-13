export const ADD_BOOK = 'ADD_BOOK';
export const addBook = isbn => ({
	type: ADD_BOOK,
	isbn
});

export const BACK_TO_HOME = 'BACK_TO_HOME';
export const backToHome = () => ({
	type: BACK_TO_HOME
});

export const BOOK_SEARCH = 'BOOK_SEARCH';
export const BOOK_SEARCH_SUCCESS = 'BOOK_SEARCH_SUCCESS';
export const BOOK_SEARCH_ERROR = 'BOOK_SEARCH_ERROR';
export const bookSearch = (category, term) => dispatch => {
	dispatch({
		type: BOOK_SEARCH,
		category,
		term
	});
	const parsedTerm = term.split(' ').join('%20');
	//initial search does not need to have page number
	fetch(`http://localhost:8080/api/search?${category}=${parsedTerm}`)
		.then(res => {
			if(!res.ok){
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(browseResult => {
			dispatch({
				type: BOOK_SEARCH_SUCCESS,
				payload: browseResult
			});
		})
		.catch(err => {
			console.log(err);
			dispatch({ type: BOOK_SEARCH_ERROR });
		});
}

export const CANCEL_EDIT = 'CANCEL_EDIT';
export const cancelEdit = () => ({
	type: CANCEL_EDIT
});

export const CANCEL_REQUEST = 'CANCEL_REQUEST';
export const cancelRequest = index => ({
	type: CANCEL_REQUEST,
	index
});

export const CLOSE_BOOK_VIEW = 'CLOSE_BOOK_VIEW';
export const closeBookView = () => ({
	type: CLOSE_BOOK_VIEW
});

export const DELETE_BOOK = 'DELETE_BOOK';
export const deleteBook = index => ({
    type: DELETE_BOOK,
    index
});

export const EDIT_INFO = 'EDIT_INFO';
export const editInfo = info => ({
	type: EDIT_INFO,
	info
});

export const FETCH_PROFILE = 'FETCH_PROFILE';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_ERROR = 'FETCH_PROFILE_ERROR';
export const fetchProfile = () => dispatch => {
	dispatch({
		type: FETCH_PROFILE
	});
	setTimeout(()=>{
		fetch('http://localhost:8080/api/users/5aaf709e4442560d94f96255')
			.then(res => {
				if(!res.ok){
					return Promise.reject(res.statusText);
				}
				return res.json();
			})
			.then(userProfile => {
				dispatch({
					type: FETCH_PROFILE_SUCCESS,
					payload: userProfile
				});
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: FETCH_PROFILE_ERROR });
			});
	}, 3000);
};

export const HIDE_ADD_BOOK_VIEW = 'HIDE_ADD_BOOK_VIEW';
export const hideAddBookView = () => ({
	type: HIDE_ADD_BOOK_VIEW
});

export const LOADING_OFF = 'LOADING_OFF';
export const loadingOff = () => ({
	type: LOADING_OFF
});

export const LOG_IN_CLICK = 'LOG_IN_CLICK';
export const logInClick = button => ({
	type: LOG_IN_CLICK,
	button
});

export const LOG_OUT_CLICK = 'LOG_OUT_CLICK';
export const logOutClick = () => ({
	type: LOG_OUT_CLICK
});

export const PAGINATION_CLICK = 'PAGINATION_CLICK';
export const paginationClick = button => ({
	type: PAGINATION_CLICK,
	button
});

export const SHOW_ADD_BOOK_VIEW = 'SHOW_ADD_BOOK_VIEW';
export const showAddBookView = () => ({
	type: SHOW_ADD_BOOK_VIEW
});

export const SHOW_BOOK_INFO = 'SHOW_BOOK_INFO';
export const showBookInfo = isbn => ({
	type: SHOW_BOOK_INFO,
	isbn
});

export const SHOW_ENTRY_FORM = 'SHOW_ENTRY_FORM';
export const showEntryForm = form => ({
	type: SHOW_ENTRY_FORM,
	form
});

export const SHOW_USERS_OFFERING = 'SHOW_USERS_OFFERING';
export const showUsersOffering = isbn => ({
	type: SHOW_USERS_OFFERING,
	isbn
});

export const SIGN_UP_CLICK = 'SIGN_UP_CLICK';
export const signUpClick = button => ({
	type: SIGN_UP_CLICK,
	button
});

export const SWITCH_TAB = 'SWITCH_TAB';
export const switchTab = tab => ({
	type: SWITCH_TAB,
	tab
});

export const SWITCH_RESULTS_FILTER = 'SWITCH_RESULTS_FILTER';
export const switchResultsFilter = filter => ({
	type: SWITCH_RESULTS_FILTER,
	filter
});

export const UPDATE_USER_ENTRY = 'UPDATE_USER_ENTRY';
export const updateUserEntry = value => ({
	type: UPDATE_USER_ENTRY,
	value
});

export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_ERROR = 'UPDATE_PROFILE_ERROR';
export const updateProfile = (input, value) => dispatch => {
	dispatch({
		type: UPDATE_PROFILE
	});
	fetch('http://localhost:8080/api/users/5aaf709e4442560d94f96255', {
		method: 'PUT',
		body: JSON.stringify({
			id: '5aaf709e4442560d94f96255',
			[input]: value
		}),
	    headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    }
	})
	.then(res => {
		if(!res.ok){
			return Promise.reject(res.statusText);
		}
		return res.json();
	})
	.then(userProfile => {
		dispatch({
			type: UPDATE_PROFILE_SUCCESS,
			payload: userProfile
		});
	})
	.catch(err => {
		dispatch({ type: FETCH_PROFILE_ERROR });
	});
};
