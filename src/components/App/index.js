import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import video from '../../videos/smoke-background-optimized.mp4'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Video from '../Video'
import Routes from '../Routes'
import FooterLogOut from '../FooterLogOut'
import MainNavigation from '../MainNavigation'
import LoaderPrimary from '../Loader/LoaderPrimary'

export function App({ email }) {
  // document.querySelector('video').playbackRate = 2

  return (
    <div className="showcase">
      <div className="showcase__content-wrapper">
        <div className="showcase__content">
          {Boolean(email) && (
            <>
              <MainNavigation />
              <LoaderPrimary />
              <hr />
              <FooterLogOut />
            </>
          )}
          <Routes />
        </div>
      </div>

      <Video />
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    email: state.firebase.auth.email,
  }
}

App.propTypes = {
  name: PropTypes.string,
}
App.defaultProps = {
  email: undefined,
}
export default connect(mapStateToProps)(App)
