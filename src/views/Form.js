import React from 'react'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import FormCreate from '../components/Form/Create'
import Dialog from '../components/Dialog/Dialog'
import Tree from '../components/Tree/Tree'
import data from './data'
import Form from '../components/Form/Form'
import Row from '../components/Row/Row'

const nameRules = { rules: { required: true, message: '请输入姓名' } }
const ageRules = { rules: { required: true, message: '请输入年龄' } }

@FormCreate
class FormPage extends React.Component {
    constructor (props) {
        super(props)
        this.state = { dialog: false, tree: data.tree }
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
                console.log(values)
            }
        })

    }
    handleHideDialog = () => {
        this.setState({
            dialog: !this.state.dialog
        })
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
                                <Tree data={this.state.tree} />
                            </Form.Item>
                        </Row.Col>
                        <Row.Col span={4}>
                            <Form.Item>
                                <Button type="submit">查询</Button>
                                <Button onClick={this.props.resetFields}>重置</Button>
                            </Form.Item>
                        </Row.Col>
                    </Row>
                </Form>
                { this.state.dialog && <Dialog hideDialog={this.handleHideDialog}>submit form error</Dialog> }
            </div>
        )
    }
}

export default FormPage