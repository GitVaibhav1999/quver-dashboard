import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import Upcoming from './Upcoming/Upcoming'

export default class Main extends Component {
    render() {
        return (
            <div>
            <Navbar/>
            <Sidebar  />
            <Upcoming/>  
            </div>
        )
    }
}
