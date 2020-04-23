import {SET_AUTHED_USER,SET_Log_Out} from '../actions/authedUser'

export default function authedUser(state=null,action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            return{
                ...state,
               ...action.authedUser
            }
        case SET_Log_Out:
             return null
        default:
            return state;
    }
}


