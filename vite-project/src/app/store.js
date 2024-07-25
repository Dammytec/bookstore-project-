import { configureStore } from '@reduxjs/toolkit'

import counterStoreReducer from './feature/counter/productSlice'
import counterSlice from './feature/counter/productSlice'
import productSlice from './feature/counter/productSlice'
export const store = configureStore({
  reducer: {
      counterStoreReducer: productSlice
  },
})  