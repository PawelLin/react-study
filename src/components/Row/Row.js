import React from 'react'

let gutterContext = 0;

function Row (props) {
    gutterContext = props.gutter / 2
    const gutter = gutterContext ? `-${gutterContext}px` : '0'
    return (
        <div style={{ marginRight: gutter, marginLeft: gutter, display: 'flex' }}>
            {props.children}
        </div>
    )
}

function Col (props) {
    const width = props.span ? `${100 / (24 / props.span)}%` : '100%'
    const gutter = gutterContext ? `${gutterContext}px` : '0'
    return (
        <div style={{ width, paddingLeft: gutter, paddingRight: gutter }}>
            {props.children}
        </div>
    )
}

Row.Col = Col

export default Row