import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'

import { NotificationsList } from './features/notifications/notificationsList'
import { SingleNotificationPage } from './features/notifications/singleNotificationPage'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <NotificationsList />
              </React.Fragment>
            )}
          />
          <Route exact path="/notifications/:notificationId" component={SingleNotificationPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
