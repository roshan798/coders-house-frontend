import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // value: 0,
    isAuth: false,
    user: null,
    otp: {
        phone: "",
        hash: "",
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            // console.log("payload",action.payload.data);

            const { user } = action.payload.data;
            state.user = user;
            //temporary
            // state.user.activated = false;
            //
            if (user === null) {
                state.isAuth = false
            }
            else {
                state.isAuth = true;
            }

        },
        setOtp: (state, action) => {
            const { phone, hash } = action.payload;
            state.otp.phone = phone;
            state.otp.hash = hash;

        },
    },
})

// Action creators are generated for each case reducer function
export const { setAuth, setOtp } = authSlice.actions

export default authSlice.reducer