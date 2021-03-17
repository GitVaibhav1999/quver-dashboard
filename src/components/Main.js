import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Settings from './Settings/Settings'
import Sider from './Sider/Sider'
import Upcoming from './Upcoming/Upcoming'

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
