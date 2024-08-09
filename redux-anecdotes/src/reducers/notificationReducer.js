import { createSlice } from '@reduxjs/toolkit'

const initialState = ''
  const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
      notify(state, action) {
        const message = action.payload
        return message
      },
      clear() {
        return initialState
      }
    },
  })

export const { notify, clear } = notificationSlice.actions

export const setNotification = (anecdote, timeout) => {
  return async dispatch => {
    dispatch(notify(anecdote))
    setTimeout(() => {
      dispatch(clear())
          }, timeout)
  }
} 

export default notificationSlice.reducer

