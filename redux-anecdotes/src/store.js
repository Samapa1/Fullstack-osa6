import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteReducer2'
import filterReducer from './reducers/filterReducer2'
import notificationReducer from './reducers/notificationReducer'

const Store = configureStore({
    reducer: {
      anecdotes: anecdoteReducer,
      filter: filterReducer,
      notification: notificationReducer

    }
  })

export default Store