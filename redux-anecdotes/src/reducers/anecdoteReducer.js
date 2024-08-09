import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const initialState = []

  const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState,
    reducers: {
      setAnecdotes(state, action) {
        return action.payload
      },

      appendAnecdote(state, action) {
        state.push(action.payload)
      },

      updateAnecdotes(state, action) {
        const changedAnecdote = action.payload
        return state.map(anecdote =>
            anecdote.id !== changedAnecdote.id ? anecdote : changedAnecdote 
          )  
      }
    },
  })

export const { setAnecdotes, appendAnecdote, updateAnecdotes  } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(anecdote)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteAnecdote = (updatedObject) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.update(updatedObject)
    dispatch(updateAnecdotes(updatedAnecdote))
  }
}



export default anecdoteSlice.reducer