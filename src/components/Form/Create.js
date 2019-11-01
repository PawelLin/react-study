import React from 'react'

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
        getFieldDecorator = (field, options) => {
            this.options[field] = options
            return InputComp => (
                <>
                    {
                        React.cloneElement(InputComp, {
                            name: field,
                            value: this.state[field] || '',
                            onChange: this.handleChange
                        })
                    }
                </>
            )
        }
        getFieldValue = () => {

        }
        getFieldsValue = () => {

        }
        render () {
            return (
                <Comp
                    {...this.props}
                    getFieldDecorator={this.getFieldDecorator}
                    getFieldValue={this.getFieldValue}
                    getFieldsValue={this.getFieldsValue}
                />
            )
        }
    }
}