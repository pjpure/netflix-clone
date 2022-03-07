import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CardState {
    id: string | null

}

// Define the initial state using that type
const initialState: CardState = {
    id: null,
}
const myListSlice = createSlice({
    name: 'mylist',
    initialState,
    reducers: {
        setCard: (state, action: PayloadAction<string | null>) => {
            state.id = action.payload;
        },
    },

})

export const { setCard } = myListSlice.actions;

export default myListSlice.reducer;