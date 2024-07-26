
import { useDispatch } from 'react-redux'
import { createAnecdote } from './../reducers/anecdoteReducer2'
import { setNotification} from '../reducers/notificationReducer'
// import { removeNotification } from '../reducers/notificationReducer'
// import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''

        // const newAnecdote = await anecdoteService.createNew(anecdote)
        // dispatch(createAnecdote(newAnecdote))

        dispatch(createAnecdote(anecdote))
        dispatch(setNotification(`new anecdote '${anecdote}'`, 3000))
        // dispatch(setNotification(`you created a new anecdote '${anecdote}'`))
        // setTimeout(() => {
        //     dispatch(removeNotification())
        //         }, 3000)

    }

    return(
    <div><h2>create new</h2>
    <form onSubmit={addAnecdote}>
    <div><input name="anecdote" /></div>
    <button type="submit">create</button>
    </form>
    </div>
    )

}

export default AnecdoteForm
