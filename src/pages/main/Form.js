import React from 'react'
import InputFormat from '../input/Format'

class Form extends React.Component {
    constructor (props) {
        super(props)
        this.state = {name: '', article: '', fruit: 'banana', language: []}
        this.handleChange = this.handleChange.bind(this)
        this.handleArticle = this.handleArticle.bind(this)
        this.handleFruit = this.handleFruit.bind(this)
        this.handleLanguage = this.handleLanguage.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (event) {
        this.setState({name: event.target.value})
    }

    handleArticle (event) {
        this.setState({article: event.target.value})
    }

    handleFruit (event) {
        this.setState({fruit: event.target.value})
    }

    handleLanguage (event) {
        const value = event.target.value
        let language = this.state.language
        let index = language.indexOf(value)
        if (index > -1) {
            language.splice(index, 1)
        } else {
            language.push(value)
        }
        this.setState({
            language
        })
    }

    handleSubmit (event) {
        alert('submit Name: ' + this.state.name)
        event.preventDefault()
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">
                    Name:
                    <input id="name" type="text" value={this.state.name} onChange={this.handleChange} />
                </label>
                <label>
                    Article:
                    <textarea value={this.state.article} onChange={this.handleArticle}></textarea>
                </label>
                <label>
                    Fruit:
                    <select value={this.state.fruit} onChange={this.handleFruit}>
                        <option value="apple">apple</option>
                        <option value="banana">banana</option>
                    </select>
                </label>
                <label>
                    Language:
                    <select multiple={true} value={this.state.language} onChange={this.handleLanguage}>
                        <option value="javascript">javascript</option>
                        <option value="java">java</option>
                        <option value="python">python</option>
                    </select>
                </label>
                <label>
                    Format:
                    <InputFormat value="abc" />
                </label>
                <input type="submit" value="submit" />
            </form>
        )
    }
}

export default Form