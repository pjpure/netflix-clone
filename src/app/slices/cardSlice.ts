import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface CardState {
    id: string | null

}

// Define the initial state using that type
const initialState: CardState = {
    id: null,
}


const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setCard: (state, action: PayloadAction<string>) => {
            state.id = action.payload;
        },
    },

})

export const { setCard } = cardSlice.actions;

export default cardSlice.reducer;