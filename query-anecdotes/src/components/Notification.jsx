import { useContext } from 'react'
import NotificationContext from './NotificationContext'

const Notification = () => {

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  // if (true) return null
  const [notification, dispatch] = useContext(NotificationContext)

  const message = notification !== ''

  return (
    <div>{message 
     ?  (<div style={style}>
     {notification}
     </div>)
     : null
   }
   </div>)
 

  // return (
  //   <div style={style}>
      
  //   </div>
  // )
}

export default Notification

// dispatch(notify(anecdote))
//     setTimeout(() => {
//       dispatch(clear())
//           }, timeout)