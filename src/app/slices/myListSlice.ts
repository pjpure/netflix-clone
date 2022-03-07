import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define the initial state using that type
type Video = {
    id: string,
    type: string,
    title: string,
    genres: string,
    img: string,
    video: string,
}

type VideoState = Video[]

const initialState: VideoState = []
const myListSlice = createSlice({
    name: 'myList',
    initialState,
    reducers: {
        addToList: (state, action: PayloadAction<Video>) => {
            const foundItem = state.find(
                (item) => item.id === action.payload.id
            )
            if (!foundItem) {
                state.push(action.payload)
            }
        },
        removeFromList: (state, action: PayloadAction<string>) => {
            return state.filter((item) => item.id !== action.payload)
        }

    },

})

export const { addToList, removeFromList } = myListSlice.actions;

export default myListSlice.reducer;