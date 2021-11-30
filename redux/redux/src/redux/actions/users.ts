import { types } from "../types"

export const login = () => {

    return (dispatch: any) => {

        dispatch(initUser())

        dispatch(okUser({
            email: 'Mati',
            accessToken: 'asljs897sadjnñdfs',
            loading: false
        }))

    }

}

const initUser = () => ({
    type: types.userInit,
    payload: {}
})

const okUser = (data: { email: string; accessToken: string; loading: boolean }) => ({
    type: types.userOk,
    payload: data
})