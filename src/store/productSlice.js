import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});




const productSlice = createSlice({


    name: 'product',

    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },

    reducers: {
        // setProducts(state, action) {

        //     state.data = action.payload;

        // },

        // setStatus(state, action) {
        //     state.status = action.payload;

        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
    }

})

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Thunks, thunks is a middleware in REDUX 


export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json();
    return data.products;

})



// prefer to use this syntax

// export function fetchProducts() {
//     return async function fetchProductsThunks(dispatch, getState) {

//         dispatch(setStatus(STATUSES.LOADING))

//         try {

//             const res = await fetch('https://dummyjson.com/products')
//             const data = await res.json();
//             dispatch(setProducts(data.products));
//             dispatch(setStatus(STATUSES.IDLE))

//         } catch (err) {
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR))

//         }
//     }
// }