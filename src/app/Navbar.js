import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Notification Widget</h1>
        <div className="navContent">
          <div className="navLinks"></div>
            <Link to='/'>Notifications</Link>
        </div>
      </section>
    </nav>
  )
}
