const initialState = {
	library: [],
    modalView: null,
    bookOnView: {}
};

const libraryReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'DELETE_BOOK':
            const filteredLibrary = state.library.filter((item, index) => index !== action.index);
            return {
                ...state,
                library: filteredLibrary
            }
        case 'FETCH_MY_LIBRARY_SUCCESS':
            return {
                ...state,
                library: action.payload
            }
        case 'UPDATE_BOOK_ON_VIEW':
            console.log(action.book);
            return {
                ...state,
                bookOnView: action.book
            }
        case 'UPDATE_MODAL_VIEW':
            return {
                ...state,
                modalView: action.view
            }

        default:
            return state;
    }
}

export default libraryReducer;