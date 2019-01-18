import React from 'react'
import styled from 'styled-components'

export default props => {
    const Label = styled.strong`
        color: #0a4bb8;  
        font-size: ${props.size}em;        
    `

    return (
        <Label>{props.children}</Label>
    )
}