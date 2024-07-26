import { useSelector } from 'react-redux'
// import { notify} from '../reducers/notificationReducer'

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  const notification = useSelector(state => state.notification)

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

   {/* render here notification... */}
      {/* {notification} */}
      {/* {notification !== "Testi" && notification }  */}