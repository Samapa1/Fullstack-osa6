import { useDispatch } from 'react-redux'
import { filterChange } from '../reducers/filterReducer2'


const Filter = () => {

    // const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()

    const handleChange = (event) => {
        const chosenLetters = event.target.value
        dispatch(filterChange(chosenLetters))
      // input-kentän arvo muuttujassa event.target.value

    }
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        filter <input onChange={handleChange} />
      </div>
    )
  }
  
  export default Filter