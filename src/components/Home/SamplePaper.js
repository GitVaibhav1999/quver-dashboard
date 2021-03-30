import React from 'react'
import { Card, CardBody, CardText,CardTitle ,CardSubtitle} from 'reactstrap'


export default function SamplePaper() {
    return (
        <div >
            <div  className="col-sm-12 col-md-6 col-lg-4"  >
                <Card >
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
    )
}
