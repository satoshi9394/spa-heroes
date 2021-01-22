import React from 'react'
import { Redirect, Route } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRouter = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {

  return (
    <Route {...rest}
      component={ (props) => (
        ( isAuthenticated ) 
          ? <Component { ...props } /> 
          : <Redirect to='/login' />
      )}
    />
  )
}

PrivateRouter.protoType = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}

export default PrivateRouter
