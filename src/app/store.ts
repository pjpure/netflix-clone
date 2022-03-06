import { configureStore } from '@reduxjs/toolkit'
import cardRuducer from './slices/cardSlice'

export const store = configureStore({
    reducer: {
        card: cardRuducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch