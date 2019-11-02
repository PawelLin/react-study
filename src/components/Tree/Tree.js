import React from 'react'
import Style from './Tree.module.css'

class Tree extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            expanded: false
        }
    }
    handleExpand = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }
    handleSelect = data => {
        this.props.onSelected(data)
    }
    render () {
        const { title, children } = this.props.data
        const hasChildren = children && children.length
        return (
            (hasChildren &&
                <ul className={this.props.notFirst ? '' : Style.tree}>
                    <span onClick={this.handleExpand} className={Style.expand + ' ' + (this.state.expanded ? Style.expanded : '')}>{title}</span>
                    { hasChildren && this.state.expanded && children.map(item => <li key={item.key}>
                        <Tree data={item} onSelected={this.handleSelect} notFirst={true} />
                    </li>) }
                </ul>) || <span className={Style.normal} onClick={() => this.handleSelect(this.props.data)}>{title}</span>
        )
    }
}

export default Tree