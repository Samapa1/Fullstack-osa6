import { createContext, useReducer, useContext} from 'react'

const notificationReducer = (state, action) => {
    switch (action.type) {
      case "NOTIFY":
          return action.payload
      case "CLEAR":
          return ''
    }
  }
const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
    const [notification, notificationDispatch] = useReducer(notificationReducer, '')
  
    return (
      <NotificationContext.Provider value={[notification,  notificationDispatch]}>
        {props.children}
      </NotificationContext.Provider>
    )
  }


export default NotificationContext