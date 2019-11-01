import React from 'react'
import Style from './Input.module.css'

class Input extends React.Component {
    render () {
        return <input {...this.props } className={Style.input} />
    }
}

export default Input