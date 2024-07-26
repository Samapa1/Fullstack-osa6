// import { createStore } from 'redux'

const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  console.log(state.good)
  switch (action.type) {
    case 'GOOD': 
      // const updatedGood = state.good += 1
      // const changedState = {
      //   // ...state, good: 1
      //   ...state, good: state.good +1
      // }
      // return changedState 
      return {...state, good: state.good +1}
    case 'OK':
      // const changedState = {
      //   // ...state, good: 1
      //   ...state, good: state.good +1
      // }
      return {...state, ok: state.ok +1}
    case 'BAD':
      return {...state, bad: state.bad +1}
    case 'ZERO':
      return initialState
    default: return state
  }
  
}

// const store = createStore(counterReducer)

// store.dispatch({
//   type: 'GOOD'
// })

export default counterReducer
