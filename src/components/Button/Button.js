import React from 'react'
import Style from './Button.module.css'

class Button extends React.Component {
    onClick = e => {
        this.props.onClick(e)
    }
    render () {
        return <button { ...this.props } className={Style.button}>{this.props.children}</button>
    }
}

export default Button