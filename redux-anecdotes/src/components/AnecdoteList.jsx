import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification} from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
      if ( state.filter.length > 0 ) {
        return state.anecdotes.filter(anecdote => (anecdote.content.toLowerCase().includes(state.filter.toLowerCase())))

      }
      return state.anecdotes
    })
  
    const dispatch = useDispatch()

  const vote = (anecdote) => {
    const updatedAnecdote = {
      content: anecdote.content,
      votes: anecdote.votes +1,
      id: anecdote.id

    }

    dispatch(voteAnecdote(updatedAnecdote))
    dispatch(setNotification(`you voted '${anecdote.content}'`, 3000))
  }

  const sortAnecdotes = (a, b) => {
    return b.votes - a.votes
  }

  return(
  <div>
  {[...anecdotes].sort(sortAnecdotes).map(anecdote =>
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote)}>vote</button>
      </div>
      
    </div>
    )}
    </div>)
    
}

export default AnecdoteList