import { withRouter, NavLink } from 'react-router-dom'
import { auth } from '../../firebase'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ACTION_REGISTR_BOOLEAN_FLAG } from '../../redux/actions'

export const SignUp = ({ history, flag }) => {
  const dispatch = useDispatch()
  const handleSignUp = async (e) => {
    e.preventDefault()
    const { email, password } = e.target.elements
    try {
      await auth.createUserWithEmailAndPassword(email.value, password.value)

      if (flag === false) {
        window.open('https://cors-anywhere.herokuapp.com/')
        dispatch(ACTION_REGISTR_BOOLEAN_FLAG())
      }

      history.push('/')
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div className="signup">
      <h1 className="showcase__header">
        Sign <span>Up</span>
      </h1>
      <form onSubmit={handleSignUp}>
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
          Sign Up
        </button>
      </form>
      <p>or</p>
      <div className="log_link">
        <NavLink to="/login">Log in</NavLink>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    flag: state.registr.flag,
  }
}

SignUp.propTypes = {
  history: PropTypes.object,
}
SignUp.defaultProps = {
  history: undefined,
}
export default connect(mapStateToProps)(withRouter(SignUp))
