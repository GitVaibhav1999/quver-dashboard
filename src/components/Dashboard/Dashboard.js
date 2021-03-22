import React, { Component } from 'react'
import { Card, CardBody, CardText,CardTitle ,CardSubtitle} from 'reactstrap'
import Upcoming from '../Upcoming/Upcoming'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="row">
                {/* <h1 className="display-5">Welcome to your Dashboard,User</h1> */}
                <Card className="m-2">
                <h5  className="m-2">Recently made papers</h5>
                    <div className="row m-4">
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-3">
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">Paper 1</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            </CardBody>
                            <CardBody>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>                           
                            </CardBody>
                        </Card>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-3">
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">Paper 1</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            </CardBody>
                            <CardBody>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>                           
                            </CardBody>
                        </Card>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-3">
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">Paper 1</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            </CardBody>
                            <CardBody>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>                           
                            </CardBody>
                        </Card>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-3">
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">Paper 1</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            </CardBody>
                            <CardBody>
                            <CardText> the card's content.</CardText>                           
                            </CardBody>
                        </Card>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-3">
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">Paper 1</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            </CardBody>
                            <CardBody>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>                           
                            </CardBody>
                        </Card>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-3">
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">Paper 1</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            </CardBody>
                            <CardBody>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>                           
                            </CardBody>
                        </Card>
                        </div>                       
                    </div>                   
                </Card>    
                <Upcoming/>
            </div>
        )
    }
}
