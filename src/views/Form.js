import React from 'react'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import FormCreate from '../components/Form/Create'
import Dialog from '../components/Dialog/Dialog'
import Tree from '../components/Tree/Tree'
import data from './data'
import Form from '../components/Form/Form'
import Row from '../components/Row/Row'
import Table from '../components/Table/Table'

const nameRules = { rules: { required: false, message: '请输入姓名' } }
const ageRules = { rules: { required: false, message: '请输入年龄' } }

@FormCreate
class FormPage extends React.Component {
    constructor (props) {
        super(props)
        this.state = { dialog: false, tree: data.tree, columns: data.columns, list: data.list }
        this.cityName = ''
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
        const { validateFields } = this.props
        e.preventDefault()
        validateFields((err, values) => {
            if (err) {
                this.setState({
                    dialog: true
                })
            } else {
                const arr = data.list.filter(item =>
                    {
                        const name = !values.name || (item.name.indexOf(values.name) > -1)
                        const age = !values.age || (item.age === values.age)
                        const city = !this.cityName || (item.city === this.cityName)
                        return name && age && city
                    }
                )
                console.log(arr)
                this.setState({
                    list: arr
                })
            }
        })

    }
    handleHideDialog = () => {
        this.setState({
            dialog: !this.state.dialog
        })
    }
    handleTreeSelected = data => {
        this.cityName = data.title
    }
    handleResetFields = () => {
        this.cityName = ''
        this.props.resetFields()
    }
    render () {
        const { getFieldDecorator } = this.props
        return (
            <div className="content">
                <Form onSubmit={this.handleSubmit}>
                    <Row gutter={20}>
                        <Row.Col span={4}>
                            <Form.Item label="姓名">
                                {getFieldDecorator('name', nameRules)(<Input placeholder="请输入姓名" />)}
                            </Form.Item>
                        </Row.Col>
                        <Row.Col span={4}>
                            <Form.Item label="年龄">
                                {getFieldDecorator('age', ageRules)(<Input placeholder="请输入年龄" />)}
                            </Form.Item>
                        </Row.Col>
                        <Row.Col span={4}>
                            <Form.Item label="城市" style={{paddingTop: '5px'}}>
                                <Tree data={this.state.tree} onSelected={this.handleTreeSelected} />
                            </Form.Item>
                        </Row.Col>
                        <Row.Col span={4}>
                            <Form.Item>
                                <Button type="submit">查询</Button>
                                <Button onClick={this.handleResetFields}>重置</Button>
                            </Form.Item>
                        </Row.Col>
                    </Row>
                </Form>
                <Table columns={this.state.columns} data={this.state.list} />
                { this.state.dialog && <Dialog hideDialog={this.handleHideDialog}>submit form error</Dialog> }
            </div>
        )
    }
}

export default FormPage