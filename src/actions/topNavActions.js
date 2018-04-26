export const TOGGLE_ABOUT = 'TOGGLE_ABOUT';
export const toggleAbout = status => ({
  type: TOGGLE_ABOUT,
  status
});

export const TOGGLE_AUTHENTICATED = 'TOGGLE_AUTHENTICATED';
export const toggleAuthenticated = status => ({
  type: TOGGLE_AUTHENTICATED,
  status
});