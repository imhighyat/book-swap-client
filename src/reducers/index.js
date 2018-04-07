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
    currentTab: 'profile',
    editing: null
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

    return state;
};