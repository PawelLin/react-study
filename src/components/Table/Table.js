import React from 'react'
import Style from './Table.module.css'

class Table extends React.Component {
    render () {
        const { columns = [], data = [] } = this.props
        const keys = columns.map(item => item.key)
        return (
            <table className={Style.table}>
                <thead>
                    <tr>{ columns.map(item => <th key={item.key}>{item.title}</th>) }</tr>
                </thead>
                <tbody>
                    { data.map((item, index) => <tr key={`tr${index}`}>{ keys.map(key => <td key={key}>{item[key]}</td>) }</tr>) }
                    <tr></tr>
                </tbody>
            </table>
        )
    }
}

export default Table