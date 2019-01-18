/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Row, Column } from '../Grid'
import Title from '../UI/Title'
import Label from '../UI/Label'

class Details extends Component{        
    constructor(props){
        super(props)        
    }

    render(){    
        return (        
            <Row>
                <Column mobile='12' tablet='12' desktop='12'>
                    <Title size={2.3}>Informações</Title>
                    <p><Label size={1.5}>Câmbio: </Label> {this.props.details.exchange}</p>
                    <p><Label size={1.5}>Segmento: </Label> {this.props.details.industry}</p>
                    <p><Label size={1.5}>Setor: </Label> {this.props.details.sector}</p>
                    <p><Label size={1.5}>Website: </Label> {this.props.details.website}</p>
                    <p><Label size={1.5}>CEO: </Label> {this.props.details.CEO}</p>
                    <p><Label size={1.5}>Descrição: </Label> {this.props.details.description}</p>
                </Column>
            </Row>               
        )
    }
}

const mapStateToProps = state => ({
    details: state.search.details
})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Details)