import React from 'react'
import { Link } from 'react-router-dom'

class Login extends React.Component {
    handleLogin = (location) => {
        return { ...location, pathname: '/' }
    }
    render () {
        return (
            <div>
                <Link to={this.handleLogin}>登录</Link>
            </div>
        )
    }
}

export default Login