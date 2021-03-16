import React, { Component } from 'react'
import Navbar from './Navbar'
import Settings from './Settings'
import Sider from './Sider'
import Upcoming from './Upcoming'

export default class Main extends Component {
    render() {
        return (
            <div>
            <Navbar/>
            <Sider/>  
            <Upcoming/>             
            </div>
        )
    }
}
