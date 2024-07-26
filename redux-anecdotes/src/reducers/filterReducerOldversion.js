
const filterReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_FILTER':
          return action.payload
        default:
          return state
      }
  }
  
  export const filterChange = filteredAnecdotes => {
    return {
      type: 'SET_FILTER',
      payload: filteredAnecdotes,
    }
  }
  
  export default filterReducer