import React from 'react'
import Style from './Form.module.css'

function Form (props) {
    return (
        <form onSubmit={e => props.onSubmit(e)} className={Style.form}>
            {props.children}
        </form>
    )
}
class FormItem extends React.Component {
    render () {
        return (
            <div className={Style.formItem}>
                <label>{this.props.label}</label>
                <div style={this.props.style}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
Form.Item = FormItem
export default Form