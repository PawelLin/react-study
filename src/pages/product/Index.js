import React from 'react'
import './Index.css'

function ProductRow (props) {
    return (
        <tr>
            <td style={{color: props.stocked ? '' : 'red'}}>{props.name}</td>
            <td>{props.price}</td>
        </tr>
    )
}

function ProductCategoryRow (props) {
    const list = props.list.filter(item => (item.name.indexOf(props.filterText) > -1 || !props.filterText) && ((props.inStockOnly && item.stocked) || !props.inStockOnly))
    if (!list.length) return null
    return (
        <>
            <tr><th colSpan="2">{props.category}</th></tr>
            {
                list.map((item, index) => <ProductRow { ...item } key={item.name + index} />)
            }
        </>
        
    )
}

function ProductTable (props) {
    return (
        <table className="product-table" cellPadding="0" cellSpacing="0">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.list.map(item => {
                        item.filterText = props.filterText
                        item.inStockOnly = props.inStockOnly
                        return <ProductCategoryRow { ...item }  key={item.category} />
                    })
                }
            </tbody>
        </table>
    )
}

class SearchBar extends React.Component {
    handleFilterChange = (e) => {
        this.props.onFilterChange(e.target.value)
    }
    handleStockChange = (e) => {
        this.props.onStockChange(e.target.checked)
    }
    render () {
        return (
            <div>
                <input value={this.props.filterText} onChange={this.handleFilterChange} placeholder="Search..." />
                <input checked={this.props.inStockOnly} onChange={this.handleStockChange} type="checkbox" /> Only show products in stock
            </div>
        )
    }
}


class Product extends React.Component {
    constructor (props) {
        super(props)
        let list = [
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
        ]
        let itemHas = []
        let data = []
        list.forEach(item => {
            const index = itemHas.indexOf(item.category)
            if (index === -1) {
                itemHas.push(item.category)
                data.push({ category: item.category, list: [item] })
            } else {
                data[index].list.push(item)
            }
        })
        this.state = {
            list: data,
            filterText: '',
            inStockOnly: false
        }
    }
    onFilterChange = value => {
        this.setState({
            filterText: value
        })
    }
    onStockChange = value => {
        console.log(value)
        this.setState({
            inStockOnly: value
        })
    }
    render () {
        return (
            <div>
                <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} onFilterChange={this.onFilterChange} onStockChange={this.onStockChange} />
                <ProductTable { ...this.state } />
            </div>
        )
    }
}

export default Product