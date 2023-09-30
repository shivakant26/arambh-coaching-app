import { configureStore } from '@reduxjs/toolkit'
import serviceSlice from './serviceSlice'

export const store = configureStore({
  reducer: {
    sevice:serviceSlice
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch