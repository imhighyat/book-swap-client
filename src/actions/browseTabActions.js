import { API_BASE_URL, USER_ID } from '../config';

export const PERFORM_SEARCH = 'PERFORM_SEARCH';
export const PERFORM_SEARCH_SUCCESS = 'PERFORM_SEARCH_SUCCESS';
export const PERFORM_SEARCH_ERROR = 'PERFORM_SEARCH_ERROR';
export const performSearch = (category, term) => dispatch => {
	const updatedTerm = term.split(' ');
	fetch(`${API_BASE_URL}/search?${category}=${updatedTerm.join('+')}`)
	.then(res => {
		if(!res.ok){
			return Promise.reject(res.statusText);
		}
		return res.json();
	})
	.then(res => {
		let bookList;
		if(res.origin === 'collection'){
			bookList = res.data.map(item => {
				if(item.images === undefined){
                    return {
                        title: item.title,
                        author: item.authors,
                        isbn: item.isbn,
                        bookId: item._id,
                        thumbnail: 'http://i.imgur.com/sJ3CT4V.gif',
                        summary: item.summary
                    }
                }
                else{
                    return {
                        title: item.title,
                        author: item.authors,
                        isbn: item.isbn,
                        bookId: item._id,
                        thumbnail: item.images.smallThumbnail,
                        summary: item.summary
                    }
                }
			});
		}
		else{
			let isbn, images, summary, author;
            bookList = res.data.map(item => {
                item.hasOwnProperty('industryIdentifiers') ?
                    isbn = item.industryIdentifiers.map(obj => obj.identifier) : 
                        isbn = [];
                item.hasOwnProperty('imageLinks') ?
                    images = item.imageLinks : 
                        images = { smallThumbnail: 'http://i.imgur.com/sJ3CT4V.gif'};
                item.hasOwnProperty('description') ?
                    summary = item.description : 
                        summary = 'No summary provided for this book.';
                item.hasOwnProperty('authors') ?
                    author = item.authors : 
                        author = [];
                return {
                    title: item.title,
                    author,
                    isbn,
                    bookId: item._id,
                    thumbnail: images.smallThumbnail,
                    summary
                }
            });
		}

		dispatch({
			type: PERFORM_SEARCH_SUCCESS,
			payload: bookList,
			totalItems: bookList.length
		});
	})
	.catch(err => {
		console.log('errored', err);
		//dispatch({ type: PERFORM_SEARCH_ERROR });
	});
};

export const RESET_BOOK_INFO = 'RESET_BOOK_INFO';
export const resetBookInfo = () => ({
	type: RESET_BOOK_INFO,
	payload: {}
});

export const RESET_OFFERING_USERS = 'RESET_OFFERING_USERS';
export const resetOfferingUsers = () => ({
	type: RESET_OFFERING_USERS,
	payload: {}
});

export const SEND_SWAP_REQUEST = 'SEND_SWAP_REQUEST';
export const SEND_SWAP_REQUEST_SUCCESS = 'SEND_SWAP_REQUEST_SUCCESS';
export const SEND_SWAP_REQUEST_ERROR = 'SEND_SWAP_REQUEST_ERROR';
export const sendSwapRequest = (userId, myId, bookId) => dispatch => {
	fetch(`${API_BASE_URL}/users/${USER_ID}/requests`,
		{
			method: 'POST',
			body: JSON.stringify({
				requestTo: userId,
				requestFrom: myId,
				requestedBook: bookId
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
		dispatch({
			type: SEND_SWAP_REQUEST_SUCCESS
		});
	})
	.catch(err => {
		console.log('errored', err);
		//dispatch({ type: SEND_SWAP_REQUEST_ERROR });
	});
};


export const UPDATE_BOOK_INFO = 'UPDATE_BOOK_INFO';
export const updateBookInfo = payload => ({
	type: UPDATE_BOOK_INFO,
	payload
});

export const UPDATE_BROWSE_MODAL_VIEW = 'UPDATE_BROWSE_MODAL_VIEW';
export const updateBrowseModalView = view => ({
	type: UPDATE_BROWSE_MODAL_VIEW,
	view
});

export const UPDATE_SEARCH_INFO = 'UPDATE_SEARCH_INFO';
export const updateSearchInfo = payload => ({
	type: UPDATE_SEARCH_INFO,
	payload
});

export const UPDATE_USERS_OFFERING = 'UPDATE_USERS_OFFERING';
export const updateUsersOffering = (isbn, userId, bookId, thumbnail, title) => dispatch => {
	fetch(`${API_BASE_URL}/books/${isbn}/users`)
	.then(res => {
		if(!res.ok){
			return Promise.reject(res.statusText);
		}
		return res.json();
	})
	.then(res => {
		console.log(res);
		const users = res.filter(item => userId !== item._id && item.isActive);
		dispatch({
			type: UPDATE_USERS_OFFERING,
			payload: {
				users,
				bookId,
				thumbnail,
				title
			}
		});
	})
	.catch(err => {
		console.log('errored', err);
		//dispatch({ type: PERFORM_SEARCH_ERROR });
	});
};
