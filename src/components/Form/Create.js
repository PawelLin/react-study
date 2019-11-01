import React from 'react'
import Style from './Form.module.css'

export default function FormCreate (Comp) {
    return class extends React.Component {
        constructor (props) {
            super(props)
            this.options = {}
            this.state = {}
        }
        handleChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
        handleBlur = e => {
            const error = this.options[e.target.name].rules.required && !e.target.value
            this.setState({
                [e.target.name + '-error']: error ? Style.borderError : ''
            })
        }
        getFieldDecorator = (field, options) => {
            this.options[field] = options
            return InputComp => (
                <div className={Style.formItemInput}>
                    {
                        React.cloneElement(InputComp, {
                            name: field,
                            value: this.state[field] || '',
                            onChange: this.handleChange,
                            onBlur: this.handleBlur,
                            className: this.state[field + '-error'] || ''
                        })
                    }
                    { this.state[field + '-error'] && <p className={Style.tipError}>{this.state[field + '-message']}</p> }
                </div>
            )
        }
        getFieldValue = field => {
            return this.state[field]
        }
        validateFields = callback => {
            const values = {}
            const error = []
            for (let key in this.options) {
                values[key] = this.state[key]
                const rules = this.options[key].rules
                if (rules.required && !values[key]) {
                    this.setState({
                        [key + '-error']: Style.borderError,
                        [key + '-message']: rules.message
                    })
                    error.push({ [key]: rules.message })
                }
            }
            callback(error.length ? error : undefined, values)
        }
        resetFields = () => {
            for (let key in this.options) {
                this.setState({
                    [key]: ''
                })
            }
        }
        render () {
            return (
                <Comp
                    {...this.props}
                    getFieldDecorator={this.getFieldDecorator}
                    getFieldValue={this.getFieldValue}
                    validateFields={this.validateFields}
                    resetFields={this.resetFields}
                />
            )
        }
    }
}