import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { notificationAllRead } from './notificationsSlice'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';

//Using React composition, notificationsList is made to consist of two components, renderedNotifications and dropDownNotifications  
//and are managed by a global Redux state provided to the Store with the help of a Reducer Slice respectively in Store.js and notificationsSlice.js.
//React-Router is used for routing.

export const NotificationsList = () => {
  const notifications = useSelector(state => state.notifications)
  const unreadNotifications = notifications.filter(x=>x.read_status===false)
  const dispatch = useDispatch()

  const renderedNotifications = notifications.map(notification => (
    <div>
    <article className="notification-excerpt" key={notification.id}>
      <h3>{notification.title}</h3>
      <p>{notification.content.substring(0, 100)}</p>
      <Link to={`/notifications/${notification.id}`} className = "button muted-button">View notification</Link>
    </article>
    </div>
  ))

  const dropdownNotifications = notifications.map(notification => ( 
    <Dropdown.Item>
      <a className="notification-excerpt" key={notification.id}>        
        <img src={require('../../assets/notification.jpg')} alt="notification_bell"></img>
        <Link to={`/notifications/${notification.id}`} className = "button muted-button" style={notification.read_status==false? {color: 'red'}:{}}>{notification.content}</Link>
      </a>
    </Dropdown.Item>
  ))

  return (
    <section>
      <h2><u>Notification Widget</u> (Reusable Component 1)</h2>
      <p>This uses ReactJs, Redux for state based computation since notification-state is assumed to be common to the app as such generally. Please refresh to begin with the seeded data again.</p>
      <div class="dropdown">      
        <Dropdown class="dropdown"  style={{"background-color":"#3498DB !important"}}>
          <Dropdown.Toggle id="dropdown-basic">
          Notifications!
          <img src={require('../../assets/notification.jpg')} alt="notification_bell"></img>
          <span class="numberCircle">({unreadNotifications.length})</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {dropdownNotifications}
          </Dropdown.Menu>
        </Dropdown>
        <button onClick={()=>dispatch(notificationAllRead())} class="dropbtn" style={{margin:"10px"}}>Mark all Read</button>      
        <div id="myDropdown" class="dropdown-content">
          {dropdownNotifications}
        </div>
      </div>
      <h2><u>List of All Notifications</u> (Reusable Component 2)</h2>
      <p>Here is a general display of all the notifications, a brief overview into what the gist speaks of.</p>
      {renderedNotifications}
    </section>
  )
}