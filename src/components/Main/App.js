/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Simplert from 'react-simplert'

import { Container, Row, Column } from '../Grid'
import Search from '../Search'
import Infos from '../Infos'
import Details from '../Details'
import Chart from '../Chart'
import News from '../News';

class App extends Component{

  constructor(props){
      super(props)
  }

  render(){
    if(this.props.submited){
      return(
        <div>    
          <Simplert showSimplert={this.props.config.showAlert}
            type={this.props.config.typeAlert}
            title={this.props.config.titleAlert}
            message={this.props.config.messageAlert} />
          <Container>        
            <Search />
            <Row>
              <Column mobile='12' tablet='8' desktop='8'>
                <Infos />
                <Chart />
              </Column>            
              <Column mobile='12' tablet='4' desktop='4'>
                <Details />
                <News />
              </Column>         
            </Row>             
          </Container>
        </div>
      )
    }else{
      return(
        <div>
          <Simplert showSimplert={this.props.config.showAlert}
              type={this.props.config.typeAlert}
              title={this.props.config.titleAlert}
              message={this.props.config.messageAlert} />
          <Container>        
            <Search />                         
          </Container> 
        </div>       
      )
    }
  }
}

const mapStateToProps = state => ({
    config: state.alert.config,
    submited: state.search.submited
})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(App)