import React from 'react'

function FancyBorder (props) {
    return (
        <div>{props.children}</div>
    )
}

function SplitPane (props) {
    return (
        <>
            {props.left}
            {props.right}
        </>
    )
}

function WelcomeDialog (props) {
    return (
        <FancyBorder>
            <h1>{props.title}</h1>
            <p>{props.message}</p>
            <SplitPane left={<h3>left</h3>} right={<h3>right</h3>}></SplitPane>
        </FancyBorder>
    )
}

function Dialog () {
    return <WelcomeDialog title="Welcome" message="Thank you for visiting our spacecraft!"></WelcomeDialog>
}

export default Dialog