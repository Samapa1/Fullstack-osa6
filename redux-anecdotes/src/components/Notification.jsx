import { useSelector } from 'react-redux'

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