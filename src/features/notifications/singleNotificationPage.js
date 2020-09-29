import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { notificationRead } from './notificationsSlice'

export const SingleNotificationPage = ({ match }) => {
  const dispatch = useDispatch()
  const { notificationId } = match.params
  
  
  useEffect(() => {
    dispatch(notificationRead({ id: notificationId }))
      },[])

  const notification = useSelector((state) =>
    state.notifications.find((notification) => notification.id === notificationId)
  )

  if (!notification) {
    return (
      <section>
        <h2>Notification not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{notification.title}</h2>
        <div>
        </div>
        <p className="notification-content">{notification.content}</p>
        <p className="notification-content">{notification.data}</p>
        <Link to={`/editNotification/${notification.id}`} className="button">
          Back
        </Link>
      </article>
    </section>
  )
}
