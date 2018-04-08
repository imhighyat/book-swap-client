import * as actions from '../actions';

const initialState = {
    authenticated: true,
    loading: false,
    userEntry: null,
    userInfo:{
        name: 'Hayat Mazz',
        email: 'email@me.com',
        address: {
            street: '123 Main St',
            city: 'Los Angeles',
            state: 'CA',
            zip: '91402'
        },
        phone: '123456789',
        username: 'hayats',
        password: '*****'
    },
    currentTab: 'browse',
    editing: null,
    bookView: 'users',
    viewingBookInfo:{
        isbn: '456789',
        thumbnail: 'http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Papillon-dog-1.jpg',
        title: 'some title',
        author: 'some author',
        summary: 'some summary'
    },
    viewingUsersOffering: ['456689', '46968968', '4361796789'],
    browse: {
        category: 'author',
        term: 'rowling',
        results: [
            {
                thumbnail: 'https://uploads.scratch.mit.edu/users/avatars/31396620.png',
                title: 'Book Title 1',
                author: 'author 1',
                isbn: '456789',
                bookId: '123'
            },
            {
                thumbnail: 'https://uploads.scratch.mit.edu/users/avatars/31396620.png',
                title: 'Book Title 1',
                author: 'author 1',
                isbn: '687',
                bookId: '123'
            },
            {
                thumbnail: 'https://uploads.scratch.mit.edu/users/avatars/31396620.png',
                title: 'Book Title 1',
                author: 'author 1',
                isbn: '7879',
                bookId: '123'
            },
            {
                thumbnail: 'https://uploads.scratch.mit.edu/users/avatars/31396620.png',
                title: 'Book Title 1',
                author: 'author 1',
                isbn: '6965',
                bookId: '123'
            }
        ],
        totalItems: 12,
        pageNumber: 1
    }
};

export const bookReducer = (state=initialState, action) => {
    if(action.type === 'DEMO_LOG_IN'){
        return Object.assign({}, state, { authenticated: true });
    }

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

    if(action.type === 'SAVE_EDIT'){
        if(action.input === 'email'){
            return Object.assign({}, 
                state, 
                { 
                    editing: null,
                    userInfo: {...state.userInfo, email: action.value }
                }
            );
        }
        else if(action.input === 'phone'){
            return Object.assign({}, 
                state, 
                {
                    editing: null,
                    userInfo: {...state.userInfo, phone: action.value }
                }
            );
        }
        else if(action.input === 'address'){
            return Object.assign({}, 
                state, 
                {
                    editing: null,
                    userInfo: {...state.userInfo, address: action.value }
                }
            );
        }
        else if(action.input === 'password'){
            return Object.assign({}, 
                state, 
                {
                    editing: null,
                    userInfo: {...state.userInfo, password: action.value }
                }
            );
        }
    }

    if(action.type === 'SEARCH_CLICK'){
        return Object.assign({}, 
            state, 
            {
                browse: {...state.browse, category: action.category, term: action.term}
            }
        );
    }

    if(action.type === 'SHOW_BOOK_INFO'){
        console.log('showing book');
    }

    if(action.type === 'SHOW_USERS_OFFERING'){
        console.log('showing users');
    }

    return state;
};