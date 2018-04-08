export const CANCEL_EDIT = 'CANCEL_EDIT';
export const cancelEdit = () => ({
	type: CANCEL_EDIT
});

export const DEMO_LOG_IN = 'DEMO_LOG_IN';
export const demoLogIn = () => ({
    type: DEMO_LOG_IN
});

export const EDIT_INFO = 'EDIT_INFO';
export const editInfo = info => ({
	type: EDIT_INFO,
	info
});

export const LOG_IN_CLICK = 'LOG_IN_CLICK';
export const logInClick = button => ({
	type: LOG_IN_CLICK,
	button
});

export const LOG_OUT_CLICK = 'LOG_OUT_CLICK';
export const logOutClick = () => ({
	type: LOG_OUT_CLICK,
});

export const SAVE_EDIT = 'SAVE_EDIT';
export const saveEdit = (input, value) => ({
	type: SAVE_EDIT,
	input,
	value
});

export const SEARCH_CLICK = 'SEARCH_CLICK';
export const searchClick = (category, term) => ({
	type: SEARCH_CLICK,
	category,
	term
});

export const SHOW_BOOK_INFO = 'SHOW_BOOK_INFO';
export const showBookInfo = isbn => ({
	type: SHOW_BOOK_INFO,
	isbn
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