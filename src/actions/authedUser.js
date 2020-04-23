
import { showLoading, hideLoading} from 'react-redux-loading';

export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const SET_Log_Out = 'SET_Log_Out ';

export function setAuthedUser(authedUser) {
    return{
        type:SET_AUTHED_USER,
        authedUser
    }
}
export function setLogOut() {
    return{
        type:SET_Log_Out,
        authedUser:null
    }
}

export function handleLogoutUser() {
    return (dispatch) => {
        dispatch(showLoading());
        dispatch(setLogOut());
        dispatch(hideLoading());
    }
}