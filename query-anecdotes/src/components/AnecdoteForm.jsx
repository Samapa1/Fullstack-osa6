import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote } from '../requests'
import { useNotificationDispatch } from './NotificationFunctions'

const AnecdoteForm = () => {

  const queryClient = useQueryClient()
  const dispatch = useNotificationDispatch()

  const newAnecdoteMutation = useMutation({ 
    mutationFn: createAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    },
    onError: () => {
      dispatch({ type: 'NOTIFY', payload: `too short anecdote, must have length 5 or more`})
      setTimeout(() => {
          dispatch({type: 'CLEAR'})
      }, 3000)
    },
    retry: false
   })
    
  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content: content, votes: 0}, { onSuccess: () => {
      dispatch({ type: 'NOTIFY', payload: `new anecdote '${content}' `})
      setTimeout(() => {
          dispatch({type: 'CLEAR'})
      }, 3000)
    }})


  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
