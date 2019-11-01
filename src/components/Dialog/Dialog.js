import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import './Dialog.css'

class Dialog extends React.Component{
    constructor (props) {
        super(props)
        this.node = document.createElement('div')
        document.body.appendChild(this.node)
    }
    componentWillUnmount () {
        document.body.removeChild(this.node)
    }
    render () {
        const { hideDialog } = this.props
        return createPortal(
            <div className="dialog">
                { this.props.children }
                { typeof hideDialog === 'function' && <button onClick={hideDialog}>关闭</button> }
            </div>, this.node
        )
    }
}

function DialogFun (props) {
    const node = document.createElement('div')
    document.body.appendChild(node)
    useEffect(() => {
        return () => {
            document.body.removeChild(node)
        }
    })
    return createPortal(
        <div className="dialog">
            { props.children }
            { typeof props.hideDialog === 'function' && <button onClick={props.hideDialog}>关闭</button> }
        </div>, node
)
}

export default DialogFun