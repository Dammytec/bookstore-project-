import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 title: '',
 price: 0,
 description: '',
 image: '',
 quantity: 0
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = productSlice.actions

export default productSlice.reducer