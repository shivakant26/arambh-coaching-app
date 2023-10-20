import { configureStore } from '@reduxjs/toolkit'
import serviceSlice from './serviceSlice'
import blogSlice from './blogSlice'

export const store = configureStore({
  reducer: {
    sevice:serviceSlice,
    blog:blogSlice
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch