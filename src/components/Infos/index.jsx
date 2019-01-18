/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Row, Column } from '../Grid'
import Title from '../UI/Title'
import Label from '../UI/Label'

class Infos extends Component{
    
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Row>                
                <Column mobile='12' tablet='12' desktop='12'>
                    <Title size={3}>{this.props.infos.companyName}</Title>
                    <Label size={1.5}>Última ação: </Label> {this.props.infos.latestPrice}
                </Column>
            </Row>        
        )
    }
}
  
const mapStateToProps = state => ({
    infos: state.search.infos
})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Infos)