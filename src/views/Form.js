import React from 'react'
import FormCreate from '../components/Form/Create'

@FormCreate
class Form extends React.Component {
    constructor (props) {
        super(props)
        this.state = { name: '', password: '' }
    }
    handleNameChange = e => {
        this.setState({
            name: e.target.value
        })
    }
    handlePasswordChange = e => {
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log('props', this.props)
        console.log('submit', this.state)
    }
    render () {
        const { getFieldDecorator } = this.props
        return (
            <form onSubmit={this.handleSubmit}>
                {getFieldDecorator('name')(<input placeholder="please input name" />)}
                <input type="password" onChange={this.handlePasswordChange} placeholder="please input password" />
                <button type="submit">submit</button>
            </form>
        )
    }
}

export default Form