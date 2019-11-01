import React from 'react'
import { useHistory } from 'react-router-dom'

function Header (props) {
    let history = useHistory()
    return (
        <header>
            <span>css布局</span>
            <button onClick={() => history.push('/login')}>退出登录</button>
        </header>
    )
}

export default Header