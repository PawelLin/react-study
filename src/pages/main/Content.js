import React from 'react'
import logo from '../../logo.svg';
import Form from './Form'
import StateUp from './StateUp'
import Composition from './Composition'
 
class Content extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            list: [1, 2, 3, 4, 5, 6],
            isLoggedIn: false
        }
    }
    handleClick () {
        console.log(this)
    }
    handleClickArrow = () => {
        console.log(this)
    }
    handleDelete (index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list
        })
    }
    handleLogin = () => {
        console.log(123)
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }
    render () {
        return (
            <div className="content">
                {/* <div>
                    <input value={value} onChange={this.handleChange} />
                    <button onClick={this.handleClick}>新增</button>
                </div> */}
                <fieldset>
                    <legend>事件处理</legend>
                    <table>
                        <tbody>
                            {
                                this.state.list.map((item, index) => (
                                    <tr key={item}>
                                        <td>{item}</td>
                                        <td><button onClick={this.handleDelete.bind(this, index)}>删除</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <button onClick={this.handleClick}>test(未bind)</button>
                    <button onClick={this.handleClick.bind(this)}>test(有bind)</button>
                    <button onClick={(e) => this.handleClick(e)}>test(箭头函数调用)</button>
                    <button onClick={this.handleClickArrow}>test(=>)</button>
                </fieldset>
                <fieldset>
                    <legend>条件渲染</legend>
                    <h3>{this.state.isLoggedIn ? 'welcome back' : 'please sign up'}</h3>
                    <button onClick={this.handleLogin}>{this.state.isLoggedIn ? 'logout' : 'login'}</button>
                    <WarningBanner warn={this.state.isLoggedIn} />
                </fieldset>
                <fieldset>
                    <legend>表单 - 受控组件</legend>
                    <Form />
                </fieldset>
                <fieldset>
                    <legend>状态提升</legend>
                    <StateUp />
                </fieldset>
                <fieldset>
                    <legend>组合</legend>
                    <Composition />
                </fieldset>
            </div>
        )
    }
}

function WarningBanner (props) {
    return props.warn ? <img src={logo} alt="logo" /> : null
}

export default Content