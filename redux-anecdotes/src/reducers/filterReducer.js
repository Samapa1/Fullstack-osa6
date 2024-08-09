import { createSlice } from '@reduxjs/toolkit'
  
const initialState = ''
  const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
      filterChange(state, action) {
        const chosenLetters = action.payload
        return chosenLetters
      },
    },
  })


export const { filterChange } = filterSlice.actions
export default filterSlice.reducer