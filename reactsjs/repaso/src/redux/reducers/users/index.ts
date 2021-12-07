import { User } from "../../../types"

type UserState = {
    loading: boolean,
    items: User[]
    error: string
}

const intialState: UserState = {
    loading: false,
    items: [],
    error: ''
}

export const usersReducer = (state = intialState, action: any) => {

    switch(action.type) {
        case 'addUserstart' :
            return {
                ...state,
                loading: true,
            }
        case 'addUserSuccess' :
            return {
                ...state,
                items: action.payload,//aca debería estar cargado,
                loading: false
            }
        case 'addUserError' :
            return {
                ...state,
                loading: false,
                error: "No se pudo obtener usuarios"
            }

        default : return state
    }

}