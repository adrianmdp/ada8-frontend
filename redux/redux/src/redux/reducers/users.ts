import { types } from "../types"

const initialState = {
    email: '',
    accessToken: '',
    loading: false
}

export const userReducer = (state = initialState, action: any) => {

    switch(action.type) {

        case types.userInit: 
            return {
                ...state,
                loading: true
            }
        
        case types.userOk: 
            return{
                email: action.payload.email,
                accessToken: action.payload.accessToken,
                loading: false
            }
        
        case types.userError: 
            return {
                ...state,
                loading: false
            }
        default: return state

    }
}