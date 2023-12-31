import { createSlice } from "@reduxjs/toolkit";



export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: JSON.parse(sessionStorage.getItem('autherUser')) || {
            name: '',
            password: '',
            image: '',
            authUser: false
        }
    },
    reducers: {
        logIn(state, action) {
            const userId = action.payload;
            const userValidation = /^[A-Za-z]{4,10}$/i.test(userId.name);
            const passwordValidation = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(
                userId.password);
            state.user = userId;
            if (!userValidation || !passwordValidation) {
                state.user.authUser = true;

            } else {
                state.user.authUser = true;
                const saveState = JSON.stringify(userId);
                sessionStorage.setItem('authUser', saveState);

            }

        },
        logOut(state) {
            state.user = {
                name: '',
                password: '',
                image: '',
                authUser: false
            };
            sessionStorage.clear()
        }

    }
})
export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer
