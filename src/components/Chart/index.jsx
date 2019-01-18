/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import { Row, Column } from '../Grid'
import Title from '../UI/Title'

class Chart extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <Row>
                <Column mobile='12' tablet='12' desktop='12'>
                    <Title size={2.3}>Evolução das ações</Title>
                    <ResponsiveContainer aspect={2.2}>
                    <AreaChart width={730} height={250} data={this.props.chart}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorLow" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#cc0000" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#cc0000" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorHigh" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="label" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />                    
                        <Area type="monotone" dataKey="high" stroke="#82ca9d" fillOpacity={1} fill="url(#colorHigh)" />
                        <Area type='monotone' dataKey='close' stroke='#0a4bb8' fill='#0a4bb8' />
                        <Area type="monotone" dataKey="low" stroke="#cc0000" fillOpacity={1} fill="url(#colorLow)" />                    
                    </AreaChart>
                    </ResponsiveContainer>
                </Column>
            </Row>        
        )    
    }
}

const mapStateToProps = state => ({
    chart: state.search.chart
})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Chart)