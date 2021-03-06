import {
    API_AUTH_START,
    API_AUTH_SUCCESS,
    API_AUTH_FAILED,
    LOGIN,
    LOGOUT,
    VERIFIED
} from '../types';

const INITIAL_STATE = {
    id : 0,
    username : '',
    email : '',
    roleId : 0,
    loading : false,
    verified : false,
    error : ''
}

export const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case API_AUTH_START :
            return{
                ...state,
                loading : true
            }
        case API_AUTH_SUCCESS : 
            return{
                ...state,
                loading : false
            }
        case API_AUTH_FAILED : 
            return{
                ...state,
                loading : false,
                error : action.payload
            }
        case LOGIN : 
            return {
                ...state,
                ...action.payload
                // id : action.payload.id,
                // username : action.payload.username,
                // email : action.payload.email,
                // roleId : action.payload.roleId
            }
        case LOGOUT : 
            return INITIAL_STATE
        case VERIFIED : 
            return {
                ...state,
                verified : action.payload
            }
        default : 
            return state
    }
}