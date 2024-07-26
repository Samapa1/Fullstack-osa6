import { createSlice } from '@reduxjs/toolkit'
  
const initialState = ''
  const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
      filterChange(state, action) {
        const chosenLetters = action.payload
        // state = chosenLetters
        return chosenLetters
      },
    },
  })


export const { filterChange } = filterSlice.actions
export default filterSlice.reducer