import * as Actions from '../actions';

const initialState = {
    role: 'guest'
};

const user = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.SET_USER_DATA:
        {
            return {
                ...initialState,
                ...action.payload
            };
        }
        case Actions.SET_USER_BALANCE:
        {
         //   console.log('BALANCE REDUCER')
         //   console.log(state)
         //   console.log(action.data)
            return{
                ...state,
                balance:action.data
            }   
        }
        case Actions.REMOVE_USER_DATA:
        {
            return {
                ...initialState
            };
        }
        case Actions.USER_LOGGED_OUT:
        {
            return initialState;
        }
        default:
        {
            return state
        }
    }
};

export default user;
