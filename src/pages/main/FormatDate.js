import React from 'react'

function FormatDate (props) {
    return <span>{props.date.toLocaleTimeString()}</span>
}

export default FormatDate