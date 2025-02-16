// Write your code here

import {Component} from 'react'

import './index.css'

import Message from '../Message/index'

import Login from '../Login/index'

import Logout from '../Logout/index'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickedButton = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="app-container">
        <div className="home-container">
          <Message isLoggedIn={isLoggedIn} />

          {!isLoggedIn ? (
            <Login login={this.onClickedButton} />
          ) : (
            <Logout logout={this.onClickedButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
