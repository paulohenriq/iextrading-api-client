import React from 'react'
import styled from 'styled-components'

export default props => {
    const Title = styled.h1`
        color: #0a4bb8;  
        font-size: ${props.size}em;      
    `

    return (
        <Title>{props.children}</Title>
    )
}