// Write your code here
import './index.css'

const Message = props => {
  const {isLoggedIn} = props

  const messageText = isLoggedIn ? 'Welcome User' : 'Please Login'
  return <h1 className="heading">{messageText}</h1>
}

export default Message
