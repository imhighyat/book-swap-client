const initialState = {
    currentSearch: {
        term: '',
        category: ''
    },
	results: [],
    totalItems: 0,
    pageNumber: 1,
    offeringUsers: {},
    bookInfo: {},
    modalView: null
};

const browseReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'PERFORM_SEARCH_SUCCESS':
            return {
                ...state,
                results: action.payload,
                totalItems: action.totalItems
            }
        case 'RESET_BOOK_INFO':
            return {
                ...state,
                bookInfo: action.payload
            }
        case 'RESET_OFFERING_USERS':
            return {
                ...state,
                offeringUsers: action.payload
            }
        case 'SEND_SWAP_REQUEST':
            return state;
        case 'UPDATE_BOOK_INFO':
            return {
                ...state,
                bookInfo: action.payload
            }
        case 'UPDATE_BROWSE_MODAL_VIEW':
            return {
                ...state,
                modalView: action.view
            }
        case 'UPDATE_SEARCH_INFO':
            return {
                ...state,
                currentSearch: action.payload
            }
        case 'UPDATE_USERS_OFFERING':
            return {
                ...state,
                offeringUsers: action.payload
            }
        default:
            return state;
    }
}

export default browseReducer;