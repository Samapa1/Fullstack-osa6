// import { useSelector, useDispatch } from 'react-redux'
// import { createAnecdote } from './reducers/anecdoteReducer'
// import { voteAnecdote } from './reducers/anecdoteReducer'

import { useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
// import anecdoteService from './services/anecdotes'
// import anecdoteReducer, { setAnecdotes } from './reducers/anecdoteReducer2'
import { initializeAnecdotes } from './reducers/anecdoteReducer2'
import { useDispatch } from 'react-redux'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch]) 

  // useEffect(() => {
  //   anecdoteService
  //     .getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  // }, [])


  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App