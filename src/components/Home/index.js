import './index.css'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {Component} from 'react'

class Home extends Component {
  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/ebank/login" />
    }
    return (
      <div className="home-container">
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
            alt="website logo"
            className="logo-image"
          />
          <button
            className="logoutButon"
            type="button"
            onClick={this.onClickLogout}
          >
            Logout
          </button>
        </div>
        <div className="cardDetails-container">
          <h1 className="flexHead">Your Flexibility, Our Excellence</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
            alt="digital card"
            className="card-img"
          />
        </div>
      </div>
    )
  }
}

export default Home
