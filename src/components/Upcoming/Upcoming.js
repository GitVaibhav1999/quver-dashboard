import React, { Component } from 'react'
import { Card, CardSubtitle, CardTitle } from 'reactstrap'

export default class Upcoming extends Component {
    render() {
        return (
            <div>
            <Card >
                <CardTitle className="">Upcoming Dates</CardTitle>
                    <Card className="col-lg-3 ">
                        <CardTitle>Date 1</CardTitle>
                    </Card>
            </Card>
            
                
            </div>
        )
    }
}
