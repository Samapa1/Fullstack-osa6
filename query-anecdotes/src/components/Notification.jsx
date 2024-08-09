import { useNotificationValue } from './NotificationContext'

const Notification = () => {

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  const notification = useNotificationValue()

  const message = notification !== ''

  return (
    <div>{message 
     ?  (<div style={style}>
     {notification}
     </div>)
     : null
   }
   </div>)
 
}

export default Notification
