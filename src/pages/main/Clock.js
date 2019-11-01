import React from 'react'
import FormatDate from './FormatDate'

class Clock extends React.Component {
    constructor (props) {
        super(props)
        this.state = { date: new Date() }
    }
    componentDidMount () {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }
    componentWillUnmount () {
        clearInterval(this.timer)
    }
    render () {
        return <FormatDate date={this.state.date} />
    }
}

export default Clock