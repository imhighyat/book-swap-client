export const DEMO_LOG_IN = 'DEMO_LOG_IN';
export const demoLogIn = () => ({
    type: DEMO_LOG_IN
});

export const LOG_IN_CLICK = 'LOG_IN_CLICK';
export const logInClick = button => ({
	type: LOG_IN_CLICK,
	button
});

export const SIGN_UP_CLICK = 'SIGN_UP_CLICK';
export const signUpClick = button => ({
	type: SIGN_UP_CLICK,
	button
});

export const LOG_OUT_CLICK = 'LOG_OUT_CLICK';
export const logOutClick = () => ({
	type: LOG_OUT_CLICK,
});

export const SWITCH_TAB = 'SWITCH_TAB';
export const switchTab = tab => ({
	type: SWITCH_TAB,
	tab
});

export const EDIT_INFO = 'EDIT_INFO';
export const editInfo = info => ({
	type: EDIT_INFO,
	info
});

export const CANCEL_EDIT = 'CANCEL_EDIT';
export const cancelEdit = () => ({
	type: CANCEL_EDIT
});