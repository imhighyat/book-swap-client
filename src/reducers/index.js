import * as actions from '../actions';

const initialState = {
    authenticated: false,
    loading: false,
    userEntry: null, //'login', 'signup'
    userInfo:{
        name: '',
        address: {
            street: '',
            city: '',
            state: '',
            zip: ''
        },
        email: '',
        phone: '',
        username: '',
        password: ''
    },
    userLibrary:[
        {
            thumbnail: 'https://uploads.scratch.mit.edu/users/avatars/31396620.png',
            title: 'Book Title 1',
            author: 'author 1',
            isbn: '456789',
            bookId: '123',
            status: 'available',
            summary: 'A short description'
        },
        {
            thumbnail: 'https://uploads.scratch.mit.edu/users/avatars/31396620.png',
            title: 'Book Title 1',
            author: 'author 1',
            isbn: '687',
            bookId: '123',
            status: 'pending',
            summary: 'A short description'
        },
        {
            thumbnail: 'https://uploads.scratch.mit.edu/users/avatars/31396620.png',
            title: 'Book Title 1',
            author: 'author 1',
            isbn: '7879',
            bookId: '123',
            status: 'available',
            summary: 'A short description'
        },
        {
            thumbnail: 'https://uploads.scratch.mit.edu/users/avatars/31396620.png',
            title: 'Book Title 1',
            author: 'author 1',
            isbn: '6965',
            bookId: '123',
            status: 'pending',
            summary: 'A short description'
        }
    ],
    requests:[
        {
            origin: 'me',
            status: 'pending',
            otherUser: 'Jane Doe',
            book: 'Book 1',
            date: 'March 20, 2018'
        },
        {
            origin: 'others',
            status: 'pending',
            otherUser: 'Jane Doe',
            book: 'Book 1',
            date: 'March 20, 2018'
        },
        {
            origin: 'me',
            status: 'accepted',
            otherUser: 'Jane Doe',
            book: 'Book 1',
            date: 'March 20, 2018'
        },
        {
            origin: 'others',
            status: 'accepted',
            otherUser: 'Jane Doe',
            book: 'Book 1',
            date: 'March 20, 2018'
        },
        {
            origin: 'me',
            status: 'declined',
            otherUser: 'Jane Doe',
            book: 'Book 1',
            date: 'March 20, 2018'
        },
        {
            origin: 'others',
            status: 'declined',
            otherUser: 'Jane Doe',
            book: 'Book 1',
            date: 'March 20, 2018'
        },
        {
            origin: 'me',
            status: 'cancelled',
            otherUser: 'Jane Doe',
            book: 'Book 1',
            date: 'March 20, 2018'
        },
        {
            origin: 'others',
            status: 'cancelled',
            otherUser: 'Jane Doe',
            book: 'Book 1',
            date: 'March 20, 2018'
        }        
    ],
    currentRequestsFilter: 'all',
    currentTab: 'profile',
    editing: null,
    addBookView: 'hidden',
    bookView: null, //'users', 'info', null
    viewingBookInfo:{
        isbn: '456789',
        thumbnail: 'http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Papillon-dog-1.jpg',
        title: 'some title',
        author: 'some author',
        summary: 'some summary'
    },
    viewingUsersOffering: ['456689', '46968968', '4361796789'],
    browse: {
        category: '',
        term: '',
        results: [],
        totalItems: 0,
        pageNumber: 1
    }
};

export const bookReducer = (state=initialState, action) => {
    if(action.type === 'LOG_IN_CLICK'){
        //check if the action.button and update state accordingly
        if(action.button === 'cancel'){
            return Object.assign({}, state, { userEntry: null });
        }
        return Object.assign({}, state, { authenticated: true });
    }

    if(action.type === 'SIGN_UP_CLICK'){
        //check if the action.button and update state accordingly
        if(action.button === 'cancel'){
            return Object.assign({}, state, { userEntry: null });
        }
        return Object.assign({}, state, { authenticated: true });
    }

    if(action.type === 'LOG_OUT_CLICK'){
        return Object.assign({}, state, 
            { 
                authenticated: false, 
                userEntry: null,
                currentTab: 'profile'
            }
        );
    }

    if(action.type === 'SWITCH_TAB'){
        return Object.assign({}, state, { currentTab: action.tab });
    }

    if(action.type === 'EDIT_INFO'){
        return Object.assign({}, state, { editing: action.info  });
    }

    if(action.type === 'CANCEL_EDIT'){
        return Object.assign({}, state, { editing: null  });
    }

    if(action.type === 'BOOK_SEARCH'){
        return Object.assign({}, state, { browse: { ...state.browse, category: action.category, term: action.term }});
    }

    if(action.type === 'BOOK_SEARCH_SUCCESS'){
        //if the results came from the collection
        if(action.payload.origin === 'collection'){
            const bookList = action.payload.data.map(book => {
                if(book.images === undefined){
                    return {
                        title: book.title,
                        authors: book.authors,
                        isbn: book.isbn,
                        bookId: book._id,
                        thumbnail: 'http://i.imgur.com/sJ3CT4V.gif'
                    }
                }
                else{
                    return {
                        title: book.title,
                        authors: book.authors,
                        isbn: book.isbn,
                        bookId: book._id,
                        thumbnail: book.images.smallThumbnail
                    }
                }
            });
            return Object.assign({}, state, {browse: {...state.browse, results: bookList, totalItems: action.payload.totalItems}});
        }
        else{
            let isbn, images, summary, authors;
            const bookList = action.payload.data.map(book => {
                book.hasOwnProperty('industryIdentifiers') ?
                    isbn = book.industryIdentifiers.map(obj => obj.identifier) : 
                        isbn = [];
                book.hasOwnProperty('imageLinks') ?
                    images = book.imageLinks : 
                        images = { smallThumbnail: 'http://i.imgur.com/sJ3CT4V.gif'};
                book.hasOwnProperty('description') ?
                    summary = book.description : 
                        summary = 'No summary provided for this book.';
                book.hasOwnProperty('authors') ?
                    authors = book.authors : 
                        authors = [];
                return {
                    title: book.title,
                    authors: authors,
                    isbn: isbn,
                    thumbnail: images.smallThumbnail
                }
            });

            return Object.assign({}, state, {browse: {...state.browse, results: bookList, totalItems: action.payload.totalItems}});
        }
    }

    if(action.type === 'BOOK_SEARCH_ERROR'){
        console.log('error');
    }

    if(action.type === 'SHOW_BOOK_INFO'){
        console.log('showing book info');
        //use the isbn to search book from the collection
        //update the state with viewingBookInfo from API
        return Object.assign({}, state, { bookView: 'info' });
    }

    if(action.type === 'SHOW_USERS_OFFERING'){
        console.log('showing users offering');
        //use the isbn to search users who are offering the book
        //update the state with viewingUsersOffering from API
        return Object.assign({}, state, { bookView: 'users' });
    }

    if(action.type === 'LOADING_OFF'){
        return Object.assign({}, state, { loading: false });
    }

    if(action.type === 'PAGINATION_CLICK'){
        console.log(action.button);
        if(action.button === 'next'){
            return Object.assign({}, state, { browse: {...state.browse, pageNumber: state.browse.pageNumber + 1 }});
        }
        return Object.assign({}, state, { browse: {...state.browse, pageNumber: state.browse.pageNumber - 1 }});

    }

    if(action.type === 'CLOSE_BOOK_VIEW'){
        return Object.assign({}, state, { bookView: null });
    }

    if(action.type === 'DELETE_BOOK'){
        const filteredLibrary = state.userLibrary.filter((item, index) => index !== action.index);
        return Object.assign({}, state, { userLibrary: filteredLibrary });
    }

    if(action.type === 'SHOW_ADD_BOOK_VIEW'){
        return Object.assign({}, state, { addBookView: 'show' });
    }

    if(action.type === 'HIDE_ADD_BOOK_VIEW'){
        return Object.assign({}, state, { addBookView: 'hidden' });
    }

    if(action.type === 'ADD_BOOK'){
        console.log('adding book');
        //make a call to the api to add the book to db
        //close the add book view when call is successful and return the new library array
        return Object.assign({}, state, { addBookView: 'hidden' });
    }

    if(action.type === 'SWITCH_RESULTS_FILTER'){
        if(action.filter === 'all'){
            return Object.assign({}, state, { currentRequestsFilter: 'all' });
        }
        else if(action.filter === 'me'){
            return Object.assign({}, state, { currentRequestsFilter: 'me' });
        }
        else{
            return Object.assign({}, state, { currentRequestsFilter: 'others' });
        }
    }

    if(action.type === 'CANCEL_REQUEST'){
        //update the status of the request in index to 'cancelled'
        const updatedList = state.requests.map((request, index) => {
            //if the index is the same as the index passed
            if(index !== action.index){
                return request;
            }
            return Object.assign({}, request, {status: 'cancelled'});
        });

        return Object.assign({}, state, { requests: updatedList });
    }

    if(action.type === 'FETCH_PROFILE'){
        return Object.assign({}, state, { loading: true });
    }

    if(action.type === 'FETCH_PROFILE_SUCCESS'){
        const accountInfo = {
            name: `${action.payload.name.firstName} ${action.payload.name.lastName}`,
            email: action.payload.email,
            address: action.payload.address,
            phone: action.payload.phoneNumber,
            username: action.payload.username,
            password: action.payload.password
        }
        return Object.assign({}, 
            state, 
            {
                loading: false, 
                authenticated: true,
                userInfo: accountInfo
            }
        );
    }

    if(action.type === 'BACK_TO_HOME'){
        return Object.assign({}, state, { authenticated: false });
    }

    if(action.type === 'SHOW_ENTRY_FORM'){
        return Object.assign({}, state, {userEntry: action.form});
    }

    if(action.type === 'UPDATE_USER_ENTRY'){
        return Object.assign({}, state, {userEntry: action.value});
    }

    if(action.type === 'UPDATE_PROFILE'){
        console.log('updating');
    }

    if(action.type === 'UPDATE_PROFILE_SUCCESS'){
        const updatedInfo = {
            name: `${action.payload.name.firstName} ${action.payload.name.lastName}`,
            email: action.payload.email,
            address: action.payload.address,
            phone: action.payload.phoneNumber,
            username: action.payload.username,
            password: action.payload.password
        }
        return Object.assign({}, state, {editing: false, userInfo: updatedInfo});
    }

    if(action.type === 'UPDATE_PROFILE_ERROR'){
        console.log('error');
    }

    return state;
};