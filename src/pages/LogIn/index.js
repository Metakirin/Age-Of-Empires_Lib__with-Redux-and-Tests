// import { useContext } from "react";
import { withRouter, NavLink, Redirect } from 'react-router-dom'
import { auth } from '../../firebase'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { ACTION_REGISTR_BOOLEAN_FLAG } from '../../redux/actions'

export const LogIn = ({ history, email, flag }) => {
  const dispatch = useDispatch()

  const handleLogin = async (e) => {
    e.preventDefault()
    const { email, password } = e.target.elements
    try {
      await auth.signInWithEmailAndPassword(email.value, password.value)

      if (flag === false) {
        window.open('https://cors-anywhere.herokuapp.com/')
        dispatch(ACTION_REGISTR_BOOLEAN_FLAG())
      }

      history.push('/')
    } catch (error) {
      alert(error)
    }
  }
  return Boolean(email) ? (
    <Redirect to={{ pathname: '/' }} />
  ) : (
    <div className="login">
      <h1 className="showcase__header">
        Log <span>In</span>
      </h1>
      <form onSubmit={handleLogin}>
        <label>
          {' '}
          <span>Email</span>
          <input name="email" type="email" placeholder="email" />
        </label>
        <label>
          {' '}
          <span>Password</span>
          <input name="password" type="password" placeholder="password" />
        </label>
        <button type="submit" id="log__btn">
          Login
        </button>
      </form>
      <p>or</p>
      <div className="log_link">
        <NavLink to="/signup">Sign up</NavLink>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    email: state.firebase.auth.email,
    flag: state.registr.flag,
  }
}

LogIn.propTypes = {
  history: PropTypes.object,
  email: PropTypes.string,
}
LogIn.defaultProps = {
  email: undefined,
  history: undefined,
}
export default connect(mapStateToProps)(withRouter(LogIn))
