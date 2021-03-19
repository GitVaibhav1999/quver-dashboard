import React, { Component } from 'react'
import { Card } from 'reactstrap'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="row">
                <h1 className="display-5">Welcome to your Dashboard,User</h1>
                <Card className="m-5">
                <h5 >Recently made papers</h5>
                <div className="row">
                    <div className="col-sm-6 col-md">
                        <Card>
                            card -1
                        </Card>

                    </div>

                </div>
                    
                </Card>

            
                
            </div>
        )
    }
}
