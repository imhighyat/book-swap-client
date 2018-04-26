import { combineReducers } from 'redux';
//import all your reducers here
import userEntryReducer from './userEntryReducer';
import userProfileReducer from './userProfileReducer';
import libraryReducer from './libraryReducer';
import browseReducer from './browseReducer';

const rootReducer = combineReducers({
	userEntryReducer,
	userProfileReducer,
	libraryReducer,
	browseReducer
});

export default rootReducer;