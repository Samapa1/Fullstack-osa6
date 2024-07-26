import { createSlice } from '@reduxjs/toolkit'

const initialState = ''
  const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
      notify(state, action) {
        const message = action.payload
        console.log(message)
        return message
      },
      clear() {
        return initialState
      }
      // setNotification(state, action) {
      //   const message = action.payload
      //   return message
      // },
      // removeNotification() {
      //   return initialState
      // },
    },
  })


// export const { setNotification, removeNotification } = notificationSlice.actions
export const { notify, clear } = notificationSlice.actions

export const setNotification = (anecdote, timeout) => {
  return async dispatch => {
    console.log(anecdote)
    console.log(timeout)
    dispatch(notify(anecdote))
    setTimeout(() => {
      dispatch(clear())
          }, timeout)
  }
} 

export default notificationSlice.reducer




// vanha versio

// import { createSlice } from '@reduxjs/toolkit'

// const initialState = ''
//   const notificationSlice = createSlice({
//     name: 'notification',
//     initialState,
//     reducers: {
  
//       setNotification(state, action) {
//         const message = action.payload
//         return message
//       },
//       removeNotification() {
//         return initialState
//       },
//     },
//   })


// export const { setNotification, removeNotification } = notificationSlice.actions

// export default notificationSlice.reducer