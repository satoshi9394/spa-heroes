import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

const LoginScreen = ({ history }) => {

  const {dispatch} = useContext( AuthContext )

  const handleLogin = () => {
    // history.push('/');
    const action = {
      type: types.login,
      payload: {
        name: 'Angel'
      }
    }
    dispatch(action)
    history.replace('/');
  }
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={ handleLogin }
      >
        Ingresar
      </button>
    </div>
  )
}

export default LoginScreen
