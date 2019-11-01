import React from 'react'

class InputFormat extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = { value: (props.value && props.value.replace(/[^a-zA-Z]/g, '').toUpperCase()) || '' }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange (e) {
        const value = e.target.value
        this.setState({ value: (value && value.replace(/[^a-zA-Z]/g, '').toUpperCase()) || '' })
    }

    render () {
        return <input value={this.state.value} onChange={this.handleChange} />
    }
}

export default InputFormat