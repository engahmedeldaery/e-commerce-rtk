import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        amount: 0,
        totalAmount: 0
        , totalPrice: 0
    },
    reducers: {
        addToCart(state, action) {
            const productId = action.payload;
            try {
                const exist = state.cart.find((product) => product.id === productId.id && product.size === productId.size && product.color === productId.color);
                if (exist) {
                    exist.amount++;
                    exist.totalPrice += productId.price;
                    state.totalAmount++;
                    state.totalPrice += productId.price;
                } else {
                    state.cart.push({
                        id: productId.id,
                        size: productId.size,
                        img: productId.img,
                        text: productId.text,
                        color: productId.color,
                        price: productId.price,
                        amount: 1,
                        totalPrice: productId.price,
                        name: productId.name
                    });
                    state.totalAmount++;
                    state.totalPrice += productId.price;
                }



            } catch (err) {

                return err
            }
        },
        removeFromCart(state, action) {
            const productId = action.payload
            try {
                const exist = state.cart.find((product) =>
                    product.id === productId.id && product.size === productId.size && product.color === productId.color
                );
                if (exist.amount === 1) {
                    state.cart = state.cart.filter((product) => product.id !== productId.id || product.size !== productId.size || product.color !== productId.color)
                    state.totalAmount--;
                    state.totalPrice -= productId.price

                } else {
                    exist.amount--;
                    exist.totalPrice -= productId.price
                    state.totalAmount--;
                    state.totalPrice -= productId.price
                }

            } catch (err) {
                return err
            }
        },

    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;