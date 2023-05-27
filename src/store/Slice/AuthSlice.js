import {createSlice} from "@reduxjs/toolkit";
import {MoviesApi} from "../../services/MoviesApi";


const AuthSlice = createSlice({
    name: 'AuthSlice',
    initialState: {
        GuestSession: false,
        Auth: false
    },
    reducers: {
        setGuestSession(state, {payload}) {
            state.GuestSession = payload
        }
    }
})

export const testThunk = () => {
    return async (dispatch) => {
        try {
            const response = await MoviesApi.testApiKey()
            console.log(response);
        } catch (e) {
            console.log(e.response?.data?.message || e.message || 'error');
        }
    }
}

export const createGuestSessionThunk = () => {
    return async (dispatch) => {
        try {
            const currentGuestSess = JSON.parse(localStorage.getItem('guest_sess'))
            if (!currentGuestSess || new Date(currentGuestSess.expires_at) < new Date()) {
                const response = await MoviesApi.createGuestSession()
                localStorage.setItem('guest_sess', JSON.stringify(response.data))
                dispatch(setGuestSession(true))
            }
        } catch (e) {
            dispatch(setGuestSession(false))
            console.log(e.response?.data?.message || e.message || 'error');
        }
    }
}

export const {setGuestSession} = AuthSlice.actions

export default AuthSlice.reducer