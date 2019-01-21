/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Row, Column } from '../Grid'
import Title from '../UI/Title'
import Label from '../UI/Label'

class News extends Component{        
    constructor(props){
        super(props)        
    }

    render(){        
        let newContent = {}
        this.props.news.map((value) => (
            newContent = value                        
        ))        

        let date = new Date(newContent.datetime)        
        let month = date.getMonth()
        return (        
            <Row>
                <Column mobile='12' tablet='12' desktop='12'>
                    <Title size={2.3}>Última Notícia</Title>                    
                    <p>
                        <Label size={1.5}>Data: </Label> 
                        {`${date.getDate()}/${++month}/${date.getFullYear()}`}
                    </p>
                    <p><Label size={1.5}>Título: </Label> {newContent.headline}</p>
                    <p><Label size={1.5}>Origem: </Label> {newContent.source}</p>                    
                </Column>
            </Row>               
        )
    }
}

const mapStateToProps = state => ({
    news: state.search.news
})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(News)