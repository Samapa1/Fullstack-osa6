import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from './../reducers/anecdoteReducer2'
import { setNotification} from '../reducers/notificationReducer'
// import { removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
      if ( state.filter.length !== 0 ) {
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
    // dispatch(voteAnecdote(anecdote.id))

    // dispatch(setNotification(`you voted '${anecdote.content}'`))
    // setTimeout(() => {
    //   dispatch(removeNotification())
    //       }, 3000)
    dispatch(setNotification(`you voted '${anecdote.content}'`, 3000))
  }

  const sortAnecdotes = (a, b) => {
    // console.log(a.votes)
    // console.log(b.votes)
    // console.log("tulos")
    // console.log(b.votes-a.votes)
    return b.votes - a.votes
  }

  return(
  <div>
  {/* {anecdotes.sort(sortAnecdotes).map(anecdote => */}
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