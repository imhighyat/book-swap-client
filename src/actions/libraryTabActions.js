import { API_BASE_URL, USER_ID } from '../config';

export const ADD_BOOK = 'ADD_BOOK';
export const ADD_BOOK_SUCCESS = 'ADD_BOOK_SUCCESS';
export const ADD_BOOK_ERROR = 'ADD_BOOK_ERROR';
export const addBook = isbn => dispatch => {
	fetch(`${API_BASE_URL}/users/${USER_ID}/books`,
		{
			method: 'POST',
			body: JSON.stringify({
				id: USER_ID,
				book: isbn
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
	.then(res => {
		return fetch(`${API_BASE_URL}/users/${USER_ID}/books`)
		.then( res => {
			if(!res.ok){
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
	})
	.then(res => {
		const bookList = res.map(item => {
			return {
				thumbnail: item.book.images.smallThumbnail,
	            title: item.book.title,
	            author: item.book.authors,
	            isbn: item.book.isbn,
	            bookId: item._id,
	            hasPendingRequest: item.hasPendingRequest,
	            summary: item.book.summary
			};
		});
		dispatch({
			type: FETCH_MY_LIBRARY_SUCCESS,
			payload: bookList
		});
		dispatch({
		  type: UPDATE_MODAL_VIEW,
		  view: null
		});
	})
	.catch(err => {
		//error dispatch
		console.log(err);
		//dispatch({ type: ADD_BOOK_ERROR });
	});
};

export const DELETE_BOOK_ERROR = 'DELETE_BOOK_ERROR';
export const deleteBook = bookId => dispatch => {
	fetch(`${API_BASE_URL}/users/${USER_ID}/books/${bookId}`,
		{
			method: 'DELETE'
		}
	)
	.then(() => {
		return fetch(`${API_BASE_URL}/users/${USER_ID}/books`)
		.then( res => {
			if(!res.ok){
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
	})
	.then(res => {
		const bookList = res.map(item => {
			return {
				thumbnail: item.book.images.smallThumbnail,
	            title: item.book.title,
	            author: item.book.authors,
	            isbn: item.book.isbn,
	            bookId: item._id,
	            hasPendingRequest: item.hasPendingRequest,
	            summary: item.book.summary
			};
		});
		dispatch({
			type: FETCH_MY_LIBRARY_SUCCESS,
			payload: bookList
		});
	})
	.catch(err => {
		//error dispatch
		dispatch({ type: DELETE_BOOK_ERROR });
	});
};

export const FETCH_MY_LIBRARY = 'FETCH_MY_LIBRARY';
export const FETCH_MY_LIBRARY_SUCCESS = 'FETCH_MY_LIBRARY_SUCCESS';
export const FETCH_MY_LIBRARY_ERROR = 'FETCH_MY_LIBRARY_ERROR';
export const fetchMyLibrary = () => dispatch => {
	//fetch library
	fetch(`${API_BASE_URL}/users/${USER_ID}/books`)
	.then( res => {
		if(!res.ok){
			return Promise.reject(res.statusText);
		}
		return res.json();
	})
	.then(res => {
		const bookList = res.map(item => {
			return {
				thumbnail: item.book.images.smallThumbnail,
	            title: item.book.title,
	            author: item.book.authors,
	            isbn: item.book.isbn,
	            bookId: item._id,
	            hasPendingRequest: item.hasPendingRequest,
	            summary: item.book.summary
			};
		});
		dispatch({
			type: FETCH_MY_LIBRARY_SUCCESS,
			payload: bookList
		});
	})
	.catch(err => {
		//error dispatch
		dispatch({ type: FETCH_MY_LIBRARY_ERROR });
	});
};

export const UPDATE_BOOK_ON_VIEW = 'UPDATE_BOOK_ON_VIEW';
export const updateBookOnView = book => dispatch => {
	const bookInfo = {
		thumbnail: book.thumbnail,
		title: book.title,
		author: book.author,
		summary: book.summary
	};
	dispatch({
		type: UPDATE_BOOK_ON_VIEW,
  		book: bookInfo
	});
};

export const UPDATE_MODAL_VIEW = 'UPDATE_MODAL_VIEW';
export const updateModalView = view => ({
  type: UPDATE_MODAL_VIEW,
  view
});
