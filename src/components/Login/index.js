import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {UserId: '', pin: '', showErrorMsg: '', isError: false}

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errMsg => {
    this.setState({showErrorMsg: errMsg, isError: true})
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {UserId, pin} = this.state

    const apiUrl = 'https://apis.ccbp.in/ebank/login'
    const userDetails = {user_id: UserId, pin}
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, option)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUserId = event => {
    this.setState({UserId: event.target.value})
  }

  renderUserIdInput = () => {
    const {UserId} = this.state
    return (
      <>
        <label htmlFor="userId" className="userLabel">
          User ID
        </label>
        <input
          id="userId"
          type="text"
          className="userIdInput"
          value={UserId}
          onChange={this.onChangeUserId}
          placeholder="Enter User Id"
        />
      </>
    )
  }

  onChangePin = event => {
    this.setState({pin: event.target.value})
  }

  renderPinInput = () => {
    const {pin} = this.state
    return (
      <>
        <label htmlFor="pin" className="pinLabel">
          PIN
        </label>
        <input
          id="pin"
          type="password"
          className="pinInput"
          value={pin}
          onChange={this.onChangePin}
          placeholder="Enter PIN"
        />
      </>
    )
  }

  render() {
    const {showErrorMsg, isError} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-form-container">
        <div className="loginApplication">
          <div className="login-form-image">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
              className="loginImage"
            />
          </div>
          <div className="formContainer">
            <form className="form-page" onSubmit={this.onSubmitForm}>
              <h1 className="welcomeHead">Welcome Back!</h1>
              {this.renderUserIdInput()}
              {this.renderPinInput()}

              <button className="loginButon" type="submit">
                Login
              </button>
              {isError && <p className="errorMessage">{showErrorMsg}</p>}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
