import ReactDOM from 'react-dom/client'
// import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
// import anecdoteReducer from './reducers/anecdoteReducer'
// import filterReducer from './reducers/filterReducer'
import Store from './store.js'

// const reducer = combineReducers({
//   anecdotes: anecdoteReducer,
//   filter: filterReducer
// })



// const store = createStore(
//   reducer, /* preloadedState, */
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

//const store = createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <App />
  </Provider>
)

