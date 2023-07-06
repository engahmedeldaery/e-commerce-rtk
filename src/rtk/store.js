import { configureStore } from '@reduxjs/toolkit'
import sliderReducer from '../rtk/slices/sliderSlice'
import productsReducer from './slices/productsSlice'
import cartReducer from './slices/cartSlice'
import authReducer from './slices/authSlice'

export const store = configureStore({

    reducer: {
        slider: sliderReducer,
        products: productsReducer,
        cart: cartReducer,
        user: authReducer
    }
})

