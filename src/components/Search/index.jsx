/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

import { Row, Column } from '../Grid'

import { getLatestPrice } from './searchActions';

class Search extends Component{        
    constructor(props){
        super(props)        
    }

    verifySubmit = event => {
        if(event.key === 'Enter' && (event.target.value).length > 1){
            this.props.getLatestPrice(event.target.value)
        }
    }

    render(){
        const SearchInput = styled.input`
            margin-top: 50px;
            padding: 2em;
            color: white;
            background-color: #0a4bb8;
            font-size: 1em;
            border: none;
            border-radius: 50px;
            font-family: "Courier New", Courier, monospace;
            width: 100%;
            text-align: center;
            ::placeholder{
                color: white;
            }
        `

        return (
            <Row>
                <Column mobile='12' tablet='12' desktop='12' align='center'>
                    <SearchInput placeholder='Informe o símbolo aqui...'                
                    onKeyUp={this.verifySubmit} />
                </Column>
            </Row>
        )
    }
}

const mapStateToProps = state => ({
    infos: state.search.infos
})

const mapDispatchToProps = dispatch => 
    bindActionCreators({ getLatestPrice }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Search)