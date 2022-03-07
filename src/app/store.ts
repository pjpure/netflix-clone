import { configureStore } from '@reduxjs/toolkit'
import myListRuducer from './slices/myListSlice'

export const store = configureStore({
    reducer: {
        mylist: myListRuducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch