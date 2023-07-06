import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";
export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        filteredProducts: JSON.parse(sessionStorage.getItem("filterData")) || storeData,
        singleProduct: JSON.parse(sessionStorage.getItem('singleProduct')) || storeData,
        error: false,

    },
    reducers: {
        filteredProducts(state, action) {
            try {
                const filter = storeData.filter((product) => product.type === action.payload);
                console.log("filter", filter)
                state.filteredProducts = filter;
                state.error = false;
                const saveData = JSON.stringify(filter)
                sessionStorage.setItem("filterData", saveData)
            } catch (err) {
                return err
            }
        },
        singleProduct(state, action) {
            try {
                const oneProduct = storeData.filter((product) => product.id === action.payload);
                console.log('oneProduct', oneProduct)
                state.singleProduct = oneProduct
                const saveData = JSON.stringify(oneProduct)
                sessionStorage.setItem('singleProduct', saveData)

            } catch (err) {
                return err
            }

        },
        filterGender(state, action) {
            try {
                const gender = state.filteredProducts.filter((product) => product.gender === action.payload);
                state.error = false;
                state.filteredProducts = gender;
                const oneGenderType = gender.length > 0;
                if (oneGenderType) {
                    state.error = false;
                    const saveState = JSON.stringify(gender);
                    sessionStorage.setItem('filterData', saveState)
                } else {
                    state.error = true;
                    state.filteredProducts = [];
                }

            } catch (err) {
                return err
            }

        },
        sortByPrice(state, action) {
            try {
                const price = state.filteredProducts.sort((a, b) => a.price > b.price ? -1 : 1)
                state.filteredProducts = price;
                let count = price.length;
                if (count > 1) {
                    const noError = false;
                    state.error = noError;
                    if (!noError) {
                        state.filteredProducts = price;
                        const saveState = JSON.stringify(price);
                        sessionStorage.setItem('filterData', saveState);

                    }
                } else {
                    state.error = true;
                    state.filteredProducts = [];
                }
            } catch (err) {
                return err
            }
        },
        filterByColor(state, action) {
            try {
                const color = state.filteredProducts.filter((product) => product.color.includes(action.payload))
                state.error = false;
                state.filteredProducts = color;
                if (color.length <= 0) {
                    state.error = true;
                    state.filteredProducts = [];

                } else {
                    state.error = false;
                    state.filteredProducts = color;
                    const saveState = JSON.stringify(color);
                    sessionStorage.setItem('filterData', saveState)
                }

            } catch (err) {
                return err
            }
        },
        filterBySize(state, action) {
            try {
                const size = state.filteredProducts.filter((product) => product.size.includes(action.payload))
                state.error = false;
                state.filteredProducts = size;
                if (size.length <= 0) {
                    state.error = true;
                    state.filteredProducts = [];

                } else {
                    state.error = false;
                    state.filteredProducts = size;
                    const saveState = JSON.stringify(size);
                    sessionStorage.setItem('filterData', saveState)
                }

            } catch (err) {
                return err
            }
        }

    }

})

export const { filteredProducts, singleProduct, filterGender, sortByPrice, filterByColor, filterBySize } = productsSlice.actions;
export default productsSlice.reducer;