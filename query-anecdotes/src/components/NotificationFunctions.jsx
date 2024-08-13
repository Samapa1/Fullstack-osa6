import { useContext } from "react"
import NotificationContext from "./NotificationContext"

export const useNotificationValue = () => {
    const NotificationAndDispatch = useContext(NotificationContext)
    return NotificationAndDispatch[0]
  }
  
export const useNotificationDispatch = () => {
    const NotificationAndDispatch = useContext(NotificationContext)
    return NotificationAndDispatch[1]
}