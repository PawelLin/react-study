import React from 'react'
import { NavLink } from 'react-router-dom'

class SideMenu extends React.Component {
    constructor (props) {
        super(props)
        this.state = { active: props.url }
    }
    render () {
        let list = [
            { to: `${this.props.url}`, title: 'Home' },
            { to: `${this.props.url}/about`, title: 'About' },
            { to: `${this.props.url}/user`, title: 'User' },
            { to: `${this.props.url}/form`, title: 'Form' }
        ]
        return (
            <ul className="side-menu">
                {list.map(item => <li key={item.to}><NavLink to={item.to} exact activeClassName="active">{item.title}</NavLink></li>)}
            </ul>
        )
    }
}

export default SideMenu