import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const AuthenticatedRoute = ({
  user,
  component: Component,
  render,
  ...rest
}) => {
  if (user && render) {
    return <Route {...rest} render={render} />
  } else {
    return <Route {...rest} render={props =>
      user ? <Component {...props} /> : <Redirect to='/' />
    } />
  }
}

export default AuthenticatedRoute
